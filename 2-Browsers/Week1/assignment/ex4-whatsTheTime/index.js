'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function

  var now = new Date(),
  hour = now.getHours(),
  minute = now.getMinutes(),
  second = now.getSeconds();

if(hour < 10){
  hour = "0" + hour;
};

if(minute < 10){
  minute = "0" + minute;
};

if(second < 10){
  second = "0" + second;
};

document.getElementById("time").textContent = `${hour}:${minute}:${second}`;


};


window.onload = function(){
  setInterval(addCurrentTime, 500);
};

// TODO execute `addCurrentTime` when the browser has completed loading the page
