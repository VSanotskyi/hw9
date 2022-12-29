const refs = {
  btn: document.querySelector('.form button'),
  firstDelay: document.querySelector('.form [name="delay" ]'),
  delayStep: document.querySelector('.form [name="step" ]'),
  amount: document.querySelector('.form [name="amount" ]'),
};

refs.btn.addEventListener('click', onClick);
function onClick(evt) {
  console.log(evt);
  evt.preventDefault();
  console.log('hello');
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
