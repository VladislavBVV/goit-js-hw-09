const buttonStart = document.querySelector('[data-start]');
console.log(buttonStart);
const buttonStop = document.querySelector("[data-stop]");
console.log(buttonStop);

const body = document.querySelector("body");
console.log(body);

let timerId = null;
buttonStart.disabled = false;
buttonStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bcgChange() { 
    body.style.backgroundColor = getRandomHexColor();
}
    
buttonStart.addEventListener("click", onButtonStartClick);
buttonStop.addEventListener("click", onButtonStopClick);

function onButtonStartClick () {
    
 timerId = setInterval(() => {
  bcgChange(); 
 }, 1000);


    buttonStart.disabled = true;
    buttonStop.disabled = false;
}

function onButtonStopClick(evt) {
    clearInterval(timerId);
    // body.style.backgroundColor = '#ffffff';
 buttonStart.disabled = false;
 buttonStop.disabled = true;

}

console.log(buttonStop);












