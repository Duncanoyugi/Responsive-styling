document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".headerbuttons .login button");
    const signupButton = document.querySelector(".headerbuttons .signup button");

    loginButton.addEventListener("click", function () {
        loginButton.classList.toggle("login-active");
        signupButton.classList.remove("signup-active");
    });

    signupButton.addEventListener("click", function () {
        signupButton.classList.toggle("signup-active");
        loginButton.classList.remove("login-active");
    });
});