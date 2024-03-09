'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  function eachDiePromise(eachDie){
    return new Promise((res)=>{
      setTimeout(()=>{
        res(`${eachDie}`)
      },1000)
    })
  }

  const allPromises = dice.map(eachDiePromise);

  return Promise.race(allPromises);
}


async function main() {
  try{
    const results = await rollDice();
    console.log('Resolved!', results)
  }catch(error){
    console.log('Rejected!', error.message)
  }
}


if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;
