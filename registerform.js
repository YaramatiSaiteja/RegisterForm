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

usernameInput.addEventListener("blur",function(event){
   if(event.target.value === ""){
       usernameError.textContent = "Username is required.";
   } else {
       usernameError.textContent = "";  
   }
});

emailInput.addEventListener("blur",function(event){
   if(event.target.value === ""){
       emailError.textContent = "Email is required.";
   } else {
       emailError.textContent = "";  
   }        
});

passwordInput.addEventListener("blur",function(event){
   if(event.target.value === ""){
       passwordError.textContent = "Password is required.";
   } else { 
        passwordError.textContent = "";
   }
   });


