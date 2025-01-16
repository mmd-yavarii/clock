import { footerComponent, navComponent } from "./main.js";

const countDownContainer = document.querySelector(".count-down-container");
const setTimerContainer = document.querySelector(".timer-container");
const startBtn = document.querySelector("#start-count-down-btn");
const endBtn = document.querySelector("#end-count-down-btn");

// start counting down
const startCounting = () => {
    countDownContainer.style.display = "flex";
    setTimerContainer.style.display = "none";
    startBtn.style.display = "none";
    endBtn.style.display = "block";
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
    // check inputs
    // if inputs are not empty start function run
    event.target.value = !event.target.value && "0";
};

document.addEventListener("DOMContentLoaded", () => {
    navComponent("Timer");
    footerComponent(3);

    startBtn.addEventListener("click", startCounting);
    endBtn.addEventListener("click", clearCounting);
});
