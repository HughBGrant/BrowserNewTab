const images = [
    "eleven.jpg",
    "love-dive.jpg",
    "after-like.jpg",
    "ive-ive0.jpg",
    "ive-ive1.jpg",
    "ive-ive2.jpg",
    "liz.jpg",
    "leeseo.jpg",
    "rei.jpg",
    "wonyoung.jpg",
    "gaeul.jpg",
    "yujin.jpg",
    "somin.mp4",
];

const wrap = document.querySelector("#wrap");
const changeBg = document.querySelector(".change-bg");

const randomBg = () => {
    const nowImage = wrap.getAttribute("name");
    const chosenImages = images.filter((image) => image !== nowImage);
    const chosenImage =
        chosenImages[Math.floor(Math.random() * chosenImages.length)];
    const src = `img/backgrounds/${chosenImage}`;

    if (chosenImage.split(".").at(-1) === "mp4") {
        const nowBgVideo = `<video class="bg-video" muted autoplay loop><source src=${src} type="video/mp4" /></video>`;
        wrap.insertAdjacentHTML("afterbegin", nowBgVideo);
        wrap.style.removeProperty("background-image");
    } else {
        wrap.style.backgroundImage = `url(${src})`;
        const bgVideo = document.querySelector(".bg-video");

        if (bgVideo) {
            bgVideo.remove();
        }
    }
    wrap.setAttribute("name", chosenImage);
};

randomBg();
changeBg.addEventListener("dblclick", randomBg);
