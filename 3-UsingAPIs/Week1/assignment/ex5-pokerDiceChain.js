const { i } = require('html-validate/dist/cjs/core');
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDice() {
  
  const results = [];

  for(i = 0 ; i <= 5 ; i++){
    const value = await rollDice(i)
    results.push(value);
  }

  return results ;
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;
