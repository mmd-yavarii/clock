import { footerComponent, navComponent } from "./main.js";

const digitalClockNode = document.querySelector("#digital-clock");
const digitalUTCClockNode = document.querySelector("#digital-utc-clock");
const hourHand = document.querySelector("#analog-hour");
const minuteHand = document.querySelector("#analog-minut");
const secondHand = document.querySelector("#analog-second");

const digital = (time) => {
  const amOrPm = time.getHours() >= 12 ? "pm" : "am";
  const hour = time.getHours() % 12 || 12;
  digitalClockNode.innerText = `${hour}:${time.getMinutes()}:${time.getSeconds()}-${amOrPm}`;
  digitalUTCClockNode.innerText = `UTC / ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`;
};

const analog = (time) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + seconds * 0.1;
  const hourDegree = hours * 30 + minutes * 0.5;

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition =
      "transform 0.05s cubic-bezier(0.4, 2.3, 0.3, 1)";
  }

  secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
};

const render = () => {
  setInterval(() => {
    const time = new Date();
    digital(time);
    analog(time);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  navComponent("Clock");
  footerComponent(1);
  render();
});
