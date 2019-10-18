'use strict';
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

function randomIntegerFromInterval() {
  const max = colors.length;
  const min = 0;

  const color = Math.floor(Math.random() * (max - min + 1) + min);
  refs.body.style.backgroundColor = colors[color];
}

let interval;
function startInterval() {
  interval = setInterval(randomIntegerFromInterval, 1000);
  refs.startBtn.disabled = true;
}
function stopInterval() {
  clearInterval(interval);
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startInterval);
refs.stopBtn.addEventListener('click', stopInterval);
