const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input", function () {
    const passwordValue = password.value; // Use `.value` to get the input value
    const passwordLength = passwordValue.length; // Get the length of the password

    let strengthValue = "";

    if (passwordLength === 0) { // Check the length of the password value
        strengthValue = "";
    } else if (passwordLength < 6) {
        strengthValue = "WEAK";
    } else if (passwordLength < 10) {
        strengthValue = "MEDIUM";
    } else {
        strengthValue = "STRONG";
    }

    strength.textContent = strengthValue; // Display the strength value
    message.style.display = "block"; // Ensure the message is visible
});

submitButton.addEventListener("click", function () {
    const passwordType = password.getAttribute("type");

    if (passwordType === "password") {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }
});
