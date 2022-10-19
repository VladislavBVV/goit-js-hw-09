import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from "notiflix";


const time = document.querySelector("[data-days]");
console.log(time);
const timeDay = document.querySelector("[data-days]");
console.log(timeDay);
const timeHour = document.querySelector("[data-hours]");
console.log(timeHour);
const timeMinutes = document.querySelector("[data-minutes]");
console.log(timeMinutes);
const timeSeconds = document.querySelector("[data-seconds]");
console.log(timeSeconds);
const startButton = document.querySelector('button');
console.log(startButton);
const inputDate = document.querySelector("#datetime-picker");
const field = document.querySelector('.field');
console.log(field);

let data = null;
startButton.disabled = true;
let timerId = null;
const spanValue = document.querySelectorAll(".value");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < Date.now()) {
          Notiflix.Notify.warning("Please choose a date in the future");
          data = new Date()
      }
      else { 
          startButton.disabled = false;
           data = selectedDates[0];
      }
     
  },
};

// inputDate.flatpickr({ ...options });


// inputDate.addEventListener("input", flatpickr({ options }));


// const timer = {
//   start() {  
//     timerId = setInterval(() => { 
//         const currentTime = Date.now();
//         const delay = data - currentTime;
//         const delay2 = convertMs(delay);
//         console.log(delay2);
//         timeSeconds.textContent = delay2.seconds;
//         timeMinutes.textContent = delay2.minutes;
//         timeHour.textContent = delay2.hours;
//         timeDay.textContent = delay2.days;
//           console.log(currentTime);
//           if (delay2 <= 0) { 
//             clearInterval(timerId);
//           }
//     }, 1000);
//   },
// };



class Timer {
  constructor() {
    this.isActive = false;
    this.timerId = null;
    startButton.disabled = true;
  }
  start() {
    if (this.isActive) {
      return;
    }
   
   
      this.isActive = true;
      this.timerId = setInterval(() => {
        const currentTime = Date.now();
        const delay = data - currentTime;
        const delay2 = convertMs(delay);
        console.log(delay2);
        timeSeconds.textContent = delay2.seconds;
        timeMinutes.textContent = delay2.minutes;
        timeHour.textContent = delay2.hours;
        timeDay.textContent = delay2.days;
        console.log(currentTime);
        if (delay <= 900) {
          clearInterval(this.timerId);
          spanValue.textContent = `00`
        }
      }, 1000);
    }
  }

const timer = new Timer();

flatpickr(inputDate, options);

startButton.addEventListener('click', () => { 
timer.start();
});



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, "0");
}


// function convertMs(ms) {

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); 
// console.log(convertMs(140000)); 
// console.log(convertMs(24140000));