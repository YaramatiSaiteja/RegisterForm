let registerForm = document.getElementById("registerForm");
let usernameInput = document.getElementById("userName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let successMessage = document.getElementById("successMessage");

let formData = {
    username: "",
    email: "",
    password: ""
};

usernameInput.addEventListener("change", function(event){
    formData.username = event.target.value;
});

emailInput.addEventListener("change", function(event){
    formData.email = event.target.value;
});

passwordInput.addEventListener("change", function(event){
    formData.password = event.target.value;
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


registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let url  = "https://gorest.co.in/public/v2/users";

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GOREST_TOKEN}`
        },
        body: JSON.stringify(formData)
    }
    fetch(url,options)
    
    .then(function(response){
        return response.json();
    })

    .then(function(jsonResponse){
        console.log(jsonResponse);
    })
    .then(function(){
       successMessage.textContent = "User registered successfully!";
    })
});


