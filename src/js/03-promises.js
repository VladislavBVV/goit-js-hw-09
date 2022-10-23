

import { Notify } from 'notiflix';
const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;





  let promiseValue = { position, delay };
  // console.log(promiseValue);
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseValue);
    }
    reject(promiseValue);
  });
}



function onFormSubmit(event) { 
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value)
  let step = Number(event.currentTarget.step.value);
  let amount = Number(event.currentTarget.amount.value);
  for (let position = 1; position <= amount; position += 1) { 
    createPromise(position, delay)
    .then(({ position, delay }) => {
      setTimeout(() => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  
      }, delay);
    })
    .catch(({ position, delay }) => {
      setTimeout(() => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay);
    });
  delay += step;
  }
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });