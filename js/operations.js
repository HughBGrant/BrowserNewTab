const browserDblclick = document.querySelector(".browser-dblclick");
const browserClick = document.querySelector(".browser-click");
const executeAppClick = document.querySelectorAll(".execute-app__click");
const executeAppDblclick = document.querySelector(".execute-app__dblclick");
const adjustApp = document.querySelector(".adjust-app-size");
const startMenu = document.querySelector(".start-menu");
const windowsIcon = document.querySelector(".windows-icon");
// const searchForm = document.querySelector(".search-form");
// const searchInput = searchForm.querySelector("input");
const OPEN_CLASSNAME = "open";
const MAX_CLASSNAME = "max";

const openBrowser = () => {
    window.open("https://www.naver.com/");
};

const executeApp = (event) => {
    const target = event.currentTarget.getAttribute("name");
    const app = document.querySelector(`.app.${target}`);
    const button = document.querySelector(".task-bar__icon[name='ms-to-do']");

    app.classList.contains(OPEN_CLASSNAME)
        ? (app.classList.remove(OPEN_CLASSNAME),
          button.classList.remove(OPEN_CLASSNAME))
        : (app.classList.add(OPEN_CLASSNAME),
          button.classList.add(OPEN_CLASSNAME));
};

const adjustAppSize = (event) => {
    const target = event.currentTarget.getAttribute("name");
    const app = document.querySelector(`.app.${target}`);

    app.classList.contains(MAX_CLASSNAME)
        ? app.classList.remove(MAX_CLASSNAME)
        : app.classList.add(MAX_CLASSNAME);
};

const executeStartMenu = () => {
    const savedUsername = localStorage.getItem("username");

    startMenu.classList.contains(OPEN_CLASSNAME)
        ? startMenu.classList.remove(OPEN_CLASSNAME)
        : startMenu.classList.add(OPEN_CLASSNAME);
};

const webSearch = (event) => {
    event.preventDefault();
    window.open(
        `https://search.naver.com/search.naver?&query=${searchInput.value}`
    );
    searchInput.value = "";
};

browserDblclick.addEventListener("dblclick", openBrowser);
browserClick.addEventListener("click", openBrowser);
executeAppClick.forEach((app) => app.addEventListener("click", executeApp));
executeAppDblclick.addEventListener("dblclick", executeApp);
adjustApp.addEventListener("click", adjustAppSize);
windowsIcon.addEventListener("click", executeStartMenu);
// searchForm.addEventListener("submit", webSearch);
