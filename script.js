const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
});

const slider2 = new A11YSlider(document.querySelector(".slider-2"), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
});

// const slider = new A11YSlider(document.querySelector(".slider"));

window.addEventListener("DOMContentLoaded", () => {
  setCountDown();
});

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("display");
});

const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.classList.remove("display");
  });
});

// ===count down===
const container = document.querySelector(".countdown .content");
const values = document.querySelectorAll(".countdown .content span");
const worldCupDate = new Date(2022, 10, 20, 16, 0, 0);
function setCountDown() {
  const dateNow = new Date();
  const timeLeft = worldCupDate - dateNow;

  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const days = Math.floor(timeLeft / oneDay);
  const hours = Math.floor((timeLeft % oneDay) / oneHour);
  const minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  const seconds = Math.floor((timeLeft % oneMinute) / 1000);
  let result = [days, hours, minutes, seconds];
  values.forEach((item, index) => {
    item.innerText = result[index];
  });

  if (timeLeft <= -oneDay) {
    container = "World cup has already started";
    clearInterval(timer);
    return;
  }

  if (timeLeft <= 0) {
    section.innerText = "In progress";
    clearInterval(timer);
    return;
  }
}

const timer = setInterval(() => {
  setCountDown();
}, 1000);

setCountDown();
