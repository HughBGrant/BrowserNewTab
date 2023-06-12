const time = document.querySelector(".clock span:first-child");
const date = document.querySelector(".clock span:last-child");

const getClock = () => {
    const today = new Date();

    const hour = String(today.getHours());
    const minute = String(today.getMinutes()).padStart(2, "0");

    const year = String(today.getUTCFullYear());
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    if (hour < 12) {
        time.innerText = `오전 ${hour === "0" ? 12 : hour}:${minute}`;
    } else {
        time.innerText = `오후 ${hour === "12" ? 12 : hour % 12}:${minute}`;
    }

    date.innerText = `${year}-${month}-${day}`;
};

getClock();
setInterval(getClock, 1000);
