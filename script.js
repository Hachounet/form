const form = document.getElementById("formulaire");
const password = form.password;
const confirmPassword = form.confirmpassword
const feedback = document.getElementById("confirmPasswordFeedback");
let isPasswordMatch = false;

confirmPassword.addEventListener("input", () => {

if ( password.value != confirmPassword.value ){
    feedback.innerHTML = "Password did not match."
    isPasswordMatch = false;
}
else {
    feedback.innerHTML = "";
    isPasswordMatch = true;
}



})