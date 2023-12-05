'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

let position = 0; // setting globally (following advice) https://stackoverflow.com/questions/30673782/add-to-width-using-setinterval
const catSteps = 10;
const catImg = document.querySelector("img");
let walking = true; // will use later to determine whether steps should be added or cat should stay still

function catWalk() {
  catImg.style.left = position; // set to 0 when func. gets called

  if (walking) {
    position += catSteps; // adding 10 every time only if it's walking
  }

  catImg.style.left = position + "px";

  if (position > screen.width) { // when position is greater/equal to screen width https://stackoverflow.com/questions/10653019/how-to-find-the-screen-width-and-apply-it-to-a-particular-css
    position = 0; // setting position back to 0
  }

  if (position >= screen.width / 2) { // checking if position is in the middle of screen
    catImg.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
    walking = false;
    setTimeout(() => {
      walking = true;
      catImg.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; // set img back to og
    }, 5000); 
  };
};

window.addEventListener("load", catWalk);
setInterval(catWalk, 50);
