import { footerComponent, navComponent } from "./main.js";

const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#end");
const pauseBtn = document.querySelector("#pause");
const logBtn = document.querySelector("#log");
const counterNode = document.querySelector("#counter");
const logContainerNode = document.querySelector("#log-container");

let logCounter = 0;
let interval = null;

let miliSecond = 0;
let second = 0;
let minuts = 0;

// extract result time to show
const extractTime = () => {
    const min = minuts >= 10 ? minuts : `0${minuts}`;
    const sec = second >= 10 ? second : `0${second}`;
    const milSec =
        Math.floor(miliSecond / 10) >= 10
            ? Math.floor(miliSecond / 10)
            : `0${Math.floor(miliSecond / 10)}`;

    return `${min}:${sec}.${milSec}`;
};

// start counting
const start = () => {
    startBtn.style.display = "none";
    endBtn.style.display = "none";
    pauseBtn.style.display = "block";
    logBtn.style.display = "block";

    interval = setInterval(() => {
        if (miliSecond < 999) {
            miliSecond++;
        } else {
            miliSecond = 0;
            if (second < 59) {
                second++;
            } else {
                second = 0;
                minuts++;
            }
        }

        // show counting
        counterNode.innerText = extractTime();
    }, 1);
};

// end counting
const end = () => {
    startBtn.style.display = "block";
    endBtn.style.display = "none";
    pauseBtn.style.display = "none";
    logBtn.style.display = "none";

    logContainerNode.innerHTML = "";
    logCounter = 0;
    clearInterval(interval);
    counterNode.innerText = "00:00.00";
};

// pause counting
const pause = () => {
    startBtn.style.display = "block";
    endBtn.style.display = "block";
    pauseBtn.style.display = "none";
    logBtn.style.display = "none";

    clearInterval(interval);
};

// log
const log = () => {
    logCounter++;
    const theTime = extractTime();
    logContainerNode.innerHTML += `<p><span>${logCounter}</span> <span>${theTime}</span></p>`;
    logContainerNode.scrollTo(0, logContainerNode.scrollHeight);
};

document.addEventListener("DOMContentLoaded", () => {
    navComponent("Stopwatch");
    footerComponent(2);

    startBtn.addEventListener("click", start);
    endBtn.addEventListener("click", end);
    pauseBtn.addEventListener("click", pause);
    logBtn.addEventListener("click", log);
});
