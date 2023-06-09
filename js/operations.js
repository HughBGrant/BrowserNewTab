const browserDblclick = document.querySelector(".browser__dblclick");
const browserClick = document.querySelectorAll(".browser__click");
const executeAppClick = document.querySelectorAll(".execute-app__click");
const executeAppDblclick = document.querySelector(".execute-app__dblclick");
const adjustApp = document.querySelector(".adjust-app-size");
const executeStartMenuClick = document.querySelectorAll(
    ".execute-start-menu__click"
);
const startMenu = document.querySelector(".start-menu");
const startMenuIcon = document.querySelector(
    ".task-bar__icon[name='start-menu']"
);
const searchForm = document.querySelector(".search-form");
const searchInput = searchForm.querySelector("input");
const reference = document.querySelector(".reference");
const power = document.querySelector(".start-menu__power");

const OPEN_CLASSNAME = "open";
const MAX_CLASSNAME = "max";

const openBrowser = () => {
    window.open("https://www.naver.com/");
};

const executeApp = (event) => {
    const target = event.currentTarget.getAttribute("name");
    const app = document.querySelector(`.app.${target}`);
    const appIcon = document.querySelector(`.task-bar__icon[name=${target}]`);

    app.classList.contains(OPEN_CLASSNAME)
        ? (app.classList.remove(OPEN_CLASSNAME),
          appIcon.classList.remove(OPEN_CLASSNAME))
        : (app.classList.add(OPEN_CLASSNAME),
          appIcon.classList.add(OPEN_CLASSNAME));
};

const adjustAppSize = (event) => {
    const target = event.currentTarget.getAttribute("name");
    const app = document.querySelector(`.app.${target}`);

    app.classList.contains(MAX_CLASSNAME)
        ? app.classList.remove(MAX_CLASSNAME)
        : app.classList.add(MAX_CLASSNAME);
};

const executeStartMenu = () => {
    startMenu.classList.contains(OPEN_CLASSNAME)
        ? (startMenu.classList.remove(OPEN_CLASSNAME),
          startMenuIcon.classList.remove(OPEN_CLASSNAME))
        : (startMenu.classList.add(OPEN_CLASSNAME),
          startMenuIcon.classList.add(OPEN_CLASSNAME));
};

const webSearch = (event) => {
    event.preventDefault();
    window.open(
        `https://search.naver.com/search.naver?&query=${searchInput.value}`
    );
    searchInput.value = "";
};

browserDblclick.addEventListener("dblclick", openBrowser);
browserClick.forEach((browser) =>
    browser.addEventListener("click", openBrowser)
);
executeAppClick.forEach((app) => app.addEventListener("click", executeApp));
executeAppDblclick.addEventListener("dblclick", executeApp);
adjustApp.addEventListener("click", adjustAppSize);
executeStartMenuClick.forEach((startmenu) =>
    startmenu.addEventListener("click", executeStartMenu)
);
searchForm.addEventListener("submit", webSearch);
reference.addEventListener("click", () => {
    window.open("https://ycs-201707010.github.io/vanillaJS-windows-clone");
});
