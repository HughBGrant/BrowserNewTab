const executeApp = (event) => {
    const target = event.currentTarget.getAttribute("name");
    const app = document.querySelector(`.app.${target}`);
    app.style.visibility = "visible";
};

const adjustAppSize = (event) => {
    const target = event.currentTarget.getAttribute("name");
    app = document.querySelector(`.app.${target}`);
    if (app.classList.contains("max")) {
        app.classList.remove("max");
    } else {
        app.classList.add("max");
    }
};

const exitApp = (event) => {
    const target = event.currentTarget.getAttribute("name");
    const app = document.querySelector(`.app.${target}`);
    app.style.visibility = "hidden";
};

const openBrowser = () => {
    window.open("https://www.naver.com/");
};
