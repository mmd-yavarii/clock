import { footerComponent } from "./main.js";

const digitalClockNode = document.querySelector("#digital-clock");
const hourHand = document.querySelector("#analog-hour");
const minuteHand = document.querySelector("#analog-minut");
const secondHand = document.querySelector("#analog-second");

const digital = (time) => {
  const amOrPm = time.getHours() >= 12 ? "pm" : "am";
  const hour = time.getHours() % 12 || 12;
  digitalClockNode.innerHTML = `${hour}:${time.getMinutes()}:${time.getSeconds()}-${amOrPm}`;
};

const analog = (time) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + seconds * 0.1;
  const hourDegree = hours * 30 + minutes * 0.5;

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
  render();
  footerComponent(1);
});
