import useSWR from "swr";
import axios from "axios";

export default function DisplayFetchData() {
  const fetchData = async (url) => await axios.get(url);
  const { isLoading, error, data } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetchData
  );

  if (isLoading) {
    console.log("loading...");
  } else if (error) {
    console.log("error");
  } else {
    console.log(data);
    const imageData = data?.data;
    return (
      <div>
        <img src={imageData.message} alt="img" />
      </div>
    );
  }
}
