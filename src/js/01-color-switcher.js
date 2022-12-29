const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

btnStop.disabled = true;

btnStart.addEventListener('click', onclickStart);
btnStop.addEventListener('click', onClickStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onclickStart() {
  timerId = setInterval(function changeBgc() {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onClickStop() {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
