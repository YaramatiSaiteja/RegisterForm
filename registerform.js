let registerForm = document.getElementById("registerForm");
let usernameInput = document.getElementById("userName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
