/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-5-throw-dice-sequentially

In the previous exercise we used `Promise.all()` to throw five dice in one go.
In the current exercise we will be throwing five dice one at a time, waiting 
for a die to settle before throwing the next one. Of course, we still consider 
a die rolling off the table to be a showstopper.

To throw the dice sequentially we will be using a _promise chain_. Your job is 
to expand the given promise chain to include five dice.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];

  const rollSequentially = (dieNumber) => {
    return rollDie(dieNumber).then((value) => {
      results.push(value);
      return results;
    });
  };

  // Create an array of dice numbers from 1 to 5
  const diceNumbers = Array.from({ length: 5 }, (_, index) => index + 1);

  // Use reduce to chain the promises sequentially
  return diceNumbers.reduce((promiseChain, currentDieNumber) => {
    return promiseChain.then(() => rollSequentially(currentDieNumber));
  }, Promise.resolve());
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
