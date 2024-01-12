'use strict';

function rollDie() {
  return new Promise ((resolve,reject)=>{
  
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
      reject(new Error('Oops... Die rolled off the table.'));
      }

      if (roll === randomRollsToDo) {
        resolve(value);
      }

      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
  
    };

  
    rollOnce(1);
  })
}

function main() {
  rollDie()
      .then((resolvedValue) => {
      console.log(resolvedValue);
  })
  .catch((error) => {
      console.log(error);
  });
}


if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
The idea of using promises is still new to me, and there could be a lot of reasons to describe 
the problems in the original code. In general, I think the issues described in the original
code are related to callbacks, and using promises has made the code cleaner and more understandable.
*/