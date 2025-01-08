const root = document.documentElement;

const darkMoodStyle = (node, isDarkMood) => {
  if (isDarkMood) {
    node.style.justifyContent = "flex-end";
    root.style.setProperty("--background-color", "#fafaff");
    root.style.setProperty("--text-color", "#2d2d2d");
    root.style.setProperty("--them-secondry-color", "#ececec");
    root.style.setProperty("--box-shadow", "#0000007c");
  } else {
    node.style.justifyContent = "flex-start";
    root.style.setProperty("--background-color", "#141414");
    root.style.setProperty("--text-color", "#fafaff");
    root.style.setProperty("--them-secondry-color", "#252525");
    root.style.setProperty("--box-shadow", "#000");
  }
};

// darkMood handler
const darkMood = (node) => {
  const isDarkMood = JSON.parse(localStorage.getItem("isLight"));
  const newDarkMood = !isDarkMood;

  darkMoodStyle(node, newDarkMood);
  localStorage.setItem("isLight", JSON.stringify(newDarkMood));
};

// nav component
const navComponent = (pageTitle) => {
  const nav = document.createElement("nav");
  nav.classList.add("nav-title");

  const title = document.createElement("h1");
  title.textContent = pageTitle;

  const darkMoodBtn = document.createElement("button");
  darkMoodBtn.classList.add("dark-mood-btn");
  darkMoodBtn.innerHTML = "<span></span>";
  darkMoodBtn.addEventListener("click", () => darkMood(darkMoodBtn));

  // check if dark mode setting exists in localStorage
  if (!("isLight" in localStorage)) {
    localStorage.setItem("isLight", JSON.stringify(false));
  }
  darkMoodStyle(darkMoodBtn, JSON.parse(localStorage.getItem("isLight")));

  nav.append(title, darkMoodBtn);
  document.body.prepend(nav);
};

// footer component
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

    if (index !== nodeIndex) {
      btn.addEventListener("click", () => location.assign(item.address));
    } else {
      btn.classList.add("checked");
    }

    footer.append(btn);
  });

  document.body.append(footer);
};

export { footerComponent, navComponent };
