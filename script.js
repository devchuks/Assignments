const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const registerButton = document.getElementById("register-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginMsg = document.getElementById("login-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web") {
        open('success_page.html', '_self');
      
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    open('registration.html', '_self');
    
})