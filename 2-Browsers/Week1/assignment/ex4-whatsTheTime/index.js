'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // Function to format the current time as HH:MM:SS
  function formatTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // Get the body element
  const body = document.body;

  // Create a new paragraph element to display the time
  const timeParagraph = document.createElement('p');

  // Set an initial time
  timeParagraph.textContent = 'Current Time: ' + formatTime();

  // Append the paragraph element to the body
  body.appendChild(timeParagraph);

  // Update the time every second using setInterval
  setInterval(() => {
    timeParagraph.textContent = 'Current Time: ' + formatTime();
  }, 1000);
}

// Execute addCurrentTime when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);
