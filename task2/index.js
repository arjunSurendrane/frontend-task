function validateForm() {
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  const message = document.forms["myForm"]["message"].value;

  // Check if name is empty
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  // Check if email is empty or not valid
  if (email == "") {
    alert("Please enter your email.");
    return false;
  } else {
    // Simple email validation using regular expression
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
  }

  // Check if message is empty
  if (message == "") {
    alert("Please enter your message.");
    return false;
  }

  // If all validations pass, the form can be submitted
  return true;
}

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (const i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (const i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and set dot as active
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Increment slideIndex and reset if reached the end
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Change slide every 2 seconds
  setTimeout(showSlides, 2000);
}
