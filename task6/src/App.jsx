import { Suspense, lazy } from "react";
import DisplayFetchData from "./component/DisplayFetchData";
const ChartComponent = lazy(() => import("./component/ChartComponent"));

const App = () => {
  return (
    <div>
      <h1>Chart Example</h1>
      <Suspense fallback="loading...">
        <ChartComponent />
        <DisplayFetchData />
      </Suspense>
    </div>
  );
};

export default App;
