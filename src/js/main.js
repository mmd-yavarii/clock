const footerComponent = (nodeIndex) => {
  const buttonsData = [
    {
      address: "./alarm.html",
      inner: `<i class="fa-solid fa-bell"></i> <span>Alarm</span>`,
    },
    {
      address: "./clock.html",
      inner: `<i class="fa-solid fa-clock"></i><span>Clock</span>`,
    },
    {
      address: "./stopwatch.html",
      inner: `<i class="fa-solid fa-stopwatch"></i> <span>Stopwatch</span>`,
    },
    {
      address: "./timer.html",
      inner: `<i class="fa-solid fa-hourglass-end"></i> <span>Timer</span>`,
    },
  ];

  const footer = document.createElement("footer");

  buttonsData.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = item.inner;

    if (index != nodeIndex) {
      btn.addEventListener("click", () => location.assign(item.address));
    } else {
      btn.classList.add("checked");
    }

    footer.append(btn);
  });

  document.body.append(footer);
};

export { footerComponent };
