import { footerComponent, navComponent } from "./main.js";

const countDownContainer = document.querySelector(".count-down-container");
const setTimerContainer = document.querySelector(".timer-container");
const startBtn = document.querySelector("#start-count-down-btn");
const endBtn = document.querySelector("#end-count-down-btn");
const hourInp = document.querySelector("#timer-hour");
const minutInp = document.querySelector("#timer-minut");
const secondInp = document.querySelector("#timer-second");

// start counting down
const startCounting = () => {
    if (+hourInp.value || +minutInp.value || +secondInp.value) {
        countDownContainer.style.display = "flex";
        setTimerContainer.style.display = "none";
        startBtn.style.display = "none";
        endBtn.style.display = "block";
    }
};

// clear counting down
const clearCounting = () => {
    countDownContainer.style.display = "none";
    setTimerContainer.style.display = "flex";
    startBtn.style.display = "block";
    endBtn.style.display = "none";
};

// control inputs value
const inpControl = (event) => {
    const value = event.target.value;

    if (value.length > 2) event.target.value = value.slice(1);

    if (+value > 59) {
        event.target.value = event.target.id == "timer-hour" ? "23" : "59";
    }

    if (!value.length) event.target.value = "0";
};

document.addEventListener("DOMContentLoaded", () => {
    navComponent("Timer");
    footerComponent(3);

    startBtn.addEventListener("click", startCounting);
    endBtn.addEventListener("click", clearCounting);

    hourInp.addEventListener("keyup", inpControl);
    minutInp.addEventListener("keyup", inpControl);
    secondInp.addEventListener("keyup", inpControl);
});
