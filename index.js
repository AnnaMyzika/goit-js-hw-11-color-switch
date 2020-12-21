const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', clickOnStartBtn);
refs.stopBtn.addEventListener('click', clickOnStopBtn);

function clickOnStartBtn() {
  timerId = setInterval(setBackgrColor, 1000);

  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
};

function clickOnStopBtn() {
  clearInterval(timerId);
  timerId = null;

  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
};

function setBackgrColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};