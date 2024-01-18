const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {

  const dice = [1, 2, 3, 4, 5];

  const promises = dice.map((die) => rollDie(die));
  return  Promise.all(promises);
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
    The reason that rejected promise allows the other resolved dice that have not
    yet finished their roll to continue because The behavior of promises in JavaScript 
    is designed to be non-blocking and asynchronous which can handel
    more than one operation in the same time.
*/