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

let myLiNickname = document.getElementById("nickname");
let myLiFavoriteFood = document.getElementById("fav-food");
let myHomeTown = document.getElementById("hometown");

myLiNickname.textContent = "Aloush";
myLiFavoriteFood.textContent = "Hummus";
myHomeTown.textContent = "Qamshli";


let myLi = document.querySelectorAll("li");
myLi.forEach(function(li){
  li.className = "list-item"
});

