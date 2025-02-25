function login(){
const email= document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

auth.signInWithEmailAndPassword(email, password).then(() => {
window.location.href = "main.html";
}
)
.catch(error => alert(error.message));
}

function signUp(){
const email= document.getElementById("signUp").value;
const password = document.getElementById("signupPassword").value;

auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
userCredential.user.sendEmailVerification();
alert("Verification email sent: Please check your inbox.");

})

.catch(error => alert(error.message));
}

function forgotPassword(){
const email = document.getElementById("loginEmail").value;

auth.sendPasswordResetEmail(email)
.then(() => alert("Password reset email sent.")).catch(error => alert(error.message));
}

function logout(){
auth.signOut().then(() => window.location.href ="index.html").catch(error.message));
}