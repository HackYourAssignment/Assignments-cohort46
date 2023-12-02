'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.querySelector('#nickname').textContent = 'Ahmed';
document.querySelector('#fav-food').textContent = 'burrito';
document.querySelector('#hometown').textContent = 'Gujarat';

const listItem = document.querySelectorAll('li');
listItem.forEach(function (li) {
  li.classList.add('list-item');
});
