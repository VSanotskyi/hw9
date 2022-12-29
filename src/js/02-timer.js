import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    data = selectedDates[0];

    if (selectedDates[0] > Date.now()) {
      refs.btn.disabled = false;
      return;
    }

    Notiflix.Notify.failure('Qui timide rogat docet negare');

    // console.log(selectedDates[0]);
  },
};
let data = null;

refs.btn.disabled = true;
refs.btn.addEventListener('click', timer);
flatpickr(refs.input, options);

// fn

function timer() {
  let stopTime;
  refs.btn.disabled = true;

  const setId = setInterval(() => {
    const currentTime = Date.now();
    stopTime = data - currentTime;
    const { days, hours, minutes, seconds } = convertMs(stopTime);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;

    console.log(`${days}:${hours}:${minutes}:${seconds}`);
    if (stopTime < 900) {
      clearInterval(setId);
      return;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
