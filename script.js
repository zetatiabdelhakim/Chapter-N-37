function getWeekNumber(date) {
  const firstJan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstJan.getDay() + 1) / 7);
}

function getModifiedDayNumber(date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

let images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpg",
  "4.jpg",
  "5.jpeg",
  "6.jpeg",
];
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let morning = [
  "Train FootBall",
  "Train FootBall",
  "Running <br/> Train FootBall",
  "Train FootBall",
  "Train FootBall",
  null,
  null,
];
let gym = [null, null, null, null, null, "Lower body", null];
let tour = [
  "Chest and triceps",
  "Back and biceps",
  "Shoulders, traps, and abs",
];

function form_the_tour(gym, tour, week) {
  week *= 2;
  gym[0] = tour[week % 3];
  gym[3] = tour[(week + 1) % 3];
}

function set_day(day) {
  document.querySelector(".img_day").src = "imgs/" + images[day];
  document.querySelector(".day").textContent = days[day];
}

function set_morning(day) {
  if (morning[day] === null) return;

  let newDiv = document.createElement("div");
  newDiv.classList.add("do");
  let h6 = document.createElement("h6");
  h6.textContent = "Morning Training";
  newDiv.appendChild(h6);
  let paragraph = document.createElement("p");
  paragraph.innerHTML = morning[day];
  newDiv.appendChild(paragraph);
  let existingDiv = document.querySelector(".the_body");
  existingDiv.appendChild(newDiv);
}

function set_gym(day) {
  if (gym[day] === null) return;

  let newDiv = document.createElement("div");
  newDiv.classList.add("do");
  let h6 = document.createElement("h6");
  h6.textContent = "Gym Workout";
  newDiv.appendChild(h6);
  let paragraph = document.createElement("p");
  paragraph.textContent = gym[day];
  newDiv.appendChild(paragraph);
  let existingDiv = document.querySelector(".the_body");
  existingDiv.appendChild(newDiv);
}

// Real work
// Uncomment to run
const date = new Date();
const day = getModifiedDayNumber(date);
const week = getWeekNumber(date);
form_the_tour(gym, tour, week);
set_day(day);
set_morning(day);
set_gym(day);
setTimeout(() => {
  location.reload(true);
}, 30 * 60 * 1000);

// // Test
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// (async function () {
//   for (let week = 0; week <= 2; week++) {
//     form_the_tour(gym, tour, week);
//     for (let day = 0; day <= 6; day++) {
//       set_day(day);
//       set_morning(day);
//       set_gym(day);
//       await sleep(1000);
//       const divs = document.querySelectorAll("div.do");
//       divs.forEach((div) => div.remove());
//     }
//   }
// })();
