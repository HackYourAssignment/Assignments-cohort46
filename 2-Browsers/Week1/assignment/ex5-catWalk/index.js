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

const STEP_SIZE_PX = 10;

const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, cb) {
  let currentPos = startPos;

  function step() {
    currentPos += STEP_SIZE_PX;
    img.style.left = `${currentPos}px`;

    if (currentPos < stopPos) {
      requestAnimationFrame(step);
    } else {
      cb(); // Invoke the callback when the walking is complete
    }
  }

  step();
}

function dance(img, cb) {
  const originalSrc = img.src;
  img.src = DANCING_CAT_URL;

  setTimeout(() => {
    img.src = originalSrc;
    cb(); // Invoke the callback when the dancing is complete
  }, DANCE_TIME_MS);
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  function walkAndDance() {
    walk(img, startPos, centerPos, () => {
      dance(img, () => {
        walk(img, centerPos, stopPos, walkAndDance); // Repeat the cycle
      });
    });
  }

  walkAndDance();
}

window.addEventListener('load', catWalk);
