const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {

  const dice = [1, 2, 3, 4, 5];

  const arrayOfRollDicePromises = dice.map(eachDice =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve(`${eachDice}`);
        } else {
          reject(new Error(`Die ${eachDice} rolled off the table.`));
        }
      }, 1000);
    })
  );

  return Promise.all(arrayOfRollDicePromises);
}

function main() {
  rollDice()
      .then((resolvedValue) => {
          console.log('Resolved!', resolvedValue);
      })
      .catch((rejectedValue) => {
          console.log('Rejected!', rejectedValue);
      });
}


if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
    The resaen that rejected promise allows the athour resolved dice that have not
    yet finished their roll to continue because The behavior of promises in JavaScript 
    is designed to be non-blocking and asynchronous wich can handel
    more than one opration in the same time.
*/