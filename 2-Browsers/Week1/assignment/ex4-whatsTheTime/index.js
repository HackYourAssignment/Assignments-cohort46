'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  function updateCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Create a new div element or use an existing element with id 'time'
    const timeElement = document.getElementById('time') || document.createElement('div');
    timeElement.innerText = currentTime;

    // If 'time' element doesn't exist, append it to the body
    if (!document.getElementById('time')) {
      timeElement.id = 'time';
      document.body.appendChild(timeElement);
    }
  }

  // Update the time initially
  updateCurrentTime();

  // Update the time every second
  setInterval(updateCurrentTime, 1000);
}

// Execute addCurrentTime when the browser has completed loading the page
window.onload = addCurrentTime;

