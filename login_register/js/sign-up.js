document.addEventListener("DOMContentLoaded", function(event) { 
   var signInForm = document.querySelector(".sign-in-form");
   var forgotPassForm = document.querySelector(".forgot-pass-form");
   var signUpForm = document.querySelector(".sign-up-form");
   
   var forgotPassLink = document.querySelector("a.forgot-pass-link");
   var goToSignInLink = document.querySelector("a.go-to-sign-in");
   var signUpFormButton = document.querySelector("a.sign-up-form-btn");
   var signInFormButton = document.querySelector("a.sign-in-form-btn");

   var signInError = document.querySelector("p.sign-in-error");

   var signUpSubmit = document.getElementById("sign-up-button");
   var signInSubmit = document.getElementById("sign-in-button");

   const correctEmail = "john@gmail.com";
   const correctPassword = "john123";

   forgotPassLink.addEventListener("click", () => {
       signInForm.classList.remove("active");
       forgotPassForm.classList.add("active");
    });
    
    goToSignInLink.addEventListener("click", () => {
       signInForm.classList.add("active");
       forgotPassForm.classList.remove("active");
    });
    
    signUpFormButton.addEventListener("click", () => {
       signInForm.classList.remove("active");
       signUpForm.classList.add("active");
    });
    
    signInFormButton.addEventListener("click", () => {
       signInForm.classList.add("active");
       signUpForm.classList.remove("active");
    });

    signUpSubmit.addEventListener("click", () => {
      signInForm.classList.add("active");
      signUpForm.classList.remove("active");
    });

    signInSubmit.addEventListener("click", () => {
      var email = document.getElementById("sign-in-email-input").value;
      var password = document.getElementById("sign-in-password-input").value;

      if(email != correctEmail || password != correctPassword) {
         signInError.classList.add("active");
      } else {
         signInError.classList.remove("active");

         console.log("successful sign in");
         window.location.href = window.location.href.split("/login_register/")[0] + "/Store/store.html";
      }
    });
 });