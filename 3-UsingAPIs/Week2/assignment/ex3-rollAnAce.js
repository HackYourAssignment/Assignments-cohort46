// ! Do not change or remove the next two lines
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil(wantedValue) {
  try {
    let value;

    while (value !== wantedValue) {
      value = await rollDie()
    }
    return value;
  } catch (err) {
    throw new Error(`ERROR: ${err.message}`)
  }
}

async function main() {
  try {
    const results = await rollDieUntil('ACE');
    return results;
  } catch (error) {
    console.log('Rejected!', error.message)
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;

