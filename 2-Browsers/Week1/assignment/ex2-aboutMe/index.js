'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

let myInfo = {
  nickname: "Fre",
  favoriteFood: "Nacatamal",
  hometown: "Managua"
};

document.getElementById("nickname").textContent = myInfo.nickname;
document.getElementById("fav-food").textContent = myInfo.favoriteFood;
document.getElementById("hometown").textContent = myInfo.hometown;

document.querySelectorAll("li").forEach(el => el.classList.add("list-item"));