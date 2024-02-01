'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function replaceInfo(arr) {
    //create an Arr from span
    const span = document.querySelectorAll('span'); //grab span
    const spanArr = Array.from(span);
    spanArr.forEach(s => s.classList.add('mySpan'));

    arr.forEach((value, i) => {
        spanArr[i].textContent = value;
    });
}

function main() {
    const myArray = [
        'Mero',
        'Spaghetti',
        'Cairo'
    ];

    replaceInfo(myArray);
}
window.addEventListener('load', main);



