'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const p = document.createElement('p');
document.body.appendChild(p);

function addCurrentTime() {
  setInterval(() => {
    const now = new Date().toLocaleTimeString(); // create a new `Date` object and gets current time as a string
    p.textContent = now;
  }, 1000); // calls function every second to stay current
}

window.addEventListener('load', addCurrentTime);
