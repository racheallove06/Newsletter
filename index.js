function displayMessage(event) {
  event.preventDefault(); // Prevent the form from submitting (page refresh)

  let emailInput = document.querySelector("#email-input").value;
  let successContainer = document.querySelector("#success-container");
  let userEmail = document.querySelector("#userEmail");
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailInput === "") {
    alert("Please enter an email address.");
  } else if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address.");
  } else {
    // Hide the form
    document.querySelector("form").style.display = "none";

    // Display the success message
    successContainer.style.display = "block";
    userEmail.textContent = emailInput;
  }
}

document
  .querySelector("submitButton")
  .addEventListener("click", displayMessage);
