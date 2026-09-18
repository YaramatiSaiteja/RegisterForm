let registerForm = document.getElementById("registerForm");
let usernameInput = document.getElementById("userName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if(usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required.";
    } else {
        usernameError.textContent = "";
    }
    if(emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
    } else {
        emailError.textContent = "";
    }
    if(passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
    } else {
        passwordError.textContent = "";
    }
});


