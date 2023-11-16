'use strict';
/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {

  const compliments = ['great', 'awesome', 'courageous', 'hilarious', 
  'authentic', 'affectionate', 'brilliant', 'captivating', 'creative', 'thoughtful']

  // Math.random generates a decimal number greater than or equal to 0, but always less than 1 so I used Math.floor 
  // to round down the value to the nearest whole number, this ensures that the number represents 
  // a valid index within the 'compliments' array.
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Used a template literal to create the personalized compliment
  return `You are ${randomCompliment}, ${name}!`
}

function main() {
  
  const myName = 'Fressia';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Yos';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
