const login = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const userName = document.querySelector(".start-menu__user-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const paintGreetings = () => {
    greeting.classList.remove(HIDDEN_CLASSNAME);

    setTimeout(() => {
        login.animate(
            { visibility: "hidden" },
            { duration: 500, fill: "forwards" }
        );
    }, 1500);

    userName.textContent = localStorage.getItem(USERNAME_KEY);
};

const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
    paintGreetings();
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
userName.textContent = localStorage.getItem(USERNAME_KEY);
