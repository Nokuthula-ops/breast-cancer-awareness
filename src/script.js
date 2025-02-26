

document.addEventListener("DOMContentLoaded", function (){
firebase.initializeApp(firebaseConfig);





const loginBtn = document.getElementById("loginBtn");
if(loginBtn){
loginBtn.addEventListener("click", function(){
let email =document.getElementById("email").value;
let password =document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(email, password).then(userCredential) =>{
alert("Login successful!");

window.location.href = ",main.html";
})
        .catch((error) => {alert("Error: " + error.message);
});
});
}
const signUpBtn = document.getElementById("signUpBtn");
if(signUpBtn){
signUpBtn.addEventListener("click", function(){
let email =document.getElementById("email").value;
let password =document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(email, password).then(userCredential) =>{
alert("Sign-up successful! Check your email now.");

userCredential.user.sendEmailVerification();
})
        .catch((error) => {alert("Error: " + error.message);
});
});
}
const resetPasswordBtn = document.getElementById("resetPasswordBtn");
if(resetPasswordBtn){
resetPasswordBtn.addEventListener("click", function(){
let email =document.getElementById("email").value;


firebase.auth().sendPasswordResetEmail(email).then(() => {
alert("password reset email sent! Check your email now.");

userCredential.user.sendEmailVerification();
})
        .catch((error) => {alert("Error: " + error.message);
});
});
}

