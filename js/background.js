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

const chosenImage = images[Math.floor(Math.random() * images.length)];
const src = `img/wallpaper/${chosenImage}`;
wrap = document.querySelector("#wrap");

if (chosenImage.split(".").at(-1) === "mp4") {
    const video = `<video muted autoplay loop><source src=${src} type="video/mp4" /></video>`;
    wrap.insertAdjacentHTML("afterbegin", video);
} else {
    document.body.style.backgroundImage = `url(${src})`;
}
