import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.form button'),
  firstDelay: document.querySelector('.form [name="delay" ]'),
  delayStep: document.querySelector('.form [name="step" ]'),
  amount: document.querySelector('.form [name="amount" ]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

refs.btn.addEventListener('click', onCreatePromise);

function onCreatePromise(evt) {
  evt.preventDefault();

  let delay = refs.firstDelay.value;
  let step = refs.delayStep.value;
  let position = 1;
  const amount = refs.amount.value;

  for (let i = 0; i < amount; i += 1) {
    createPromise(position, delay)
      .then(resolve => onResolve(resolve))
      .catch(reject => onReject(reject));

    delay = Number.parseInt(delay) + Number.parseInt(step);

    position += 1;
  }
}

function onResolve(res) {
  Notify.success(res);
}
function onReject(rej) {
  Notify.failure(rej);
}
