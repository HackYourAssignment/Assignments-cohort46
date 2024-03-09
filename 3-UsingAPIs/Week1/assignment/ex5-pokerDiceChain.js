const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  
  const results = [];
  
  return rollDie(1)
    .then((value) => {
      results.push(value);
      return rollDie(2);
    })
    .then((value2) => {
      results.push(value2);
      return rollDie(3);
    })
    .then((value3) => {
      results.push(value3);
      return rollDie(4);
    })
    .then((value4) => {
      results.push(value4);
      return rollDie(5);
    })
    .then((value5) => {
      results.push(value5);
      return results;
    });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
