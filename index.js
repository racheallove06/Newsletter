function displayMessage(event) {
  event.preventDefault(); //

  let emailInput = document.querySelector("#email-input").value;
  let errorElement = document.querySelector("#error-message");
  let successContainer = document.querySelector("#success-container");
  let userEmail = document.querySelector("#userEmail");
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  let emailInputElement = document.querySelector("#email-input");
  if (emailInput === "") {
    errorElement.textContent = "Valid email required.";
    emailInputElement.classList.add("error");
  } else if (!emailPattern.test(emailInput)) {
    errorElement.textContent = "Valid email required.";
    emailInputElement.classList.add("error");
  } else {
    errorElement.textContent = ""; //
    emailInputElement.classList.remove("error");

    // Hide the entire form container
    document.querySelector("#form-container").style.display = "none";

    // Display the success message
    successContainer.style.display = "block";
    userEmail.textContent = emailInput;
  }
}

document
  .querySelector("#submitButton")
  .addEventListener("click", displayMessage);

// Select the dismiss button by its ID
const dismissButton = document.querySelector("#dismiss-button");

// Add an event listener to the dismiss button
dismissButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the button

  // Show the initial content and hide the success message
  document.querySelector("#form-container").style.display = "block";
  document.querySelector("#success-container").style.display = "none";
});
