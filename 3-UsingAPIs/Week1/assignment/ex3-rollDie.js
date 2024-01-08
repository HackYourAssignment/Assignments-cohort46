'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

// TODO Remove callback and return a promise
function rollDie(callback) {
  return new Promise ((resolve,reject)=>{
  // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      // Use callback to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
      // TODO replace "error" callback
      reject(new Error('Oops... Die rolled off the table.'));
      }

    // Use callback to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
        // TODO replace "success" callback
        resolve(null, value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
  };

  // Start the initial roll
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

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
The idea of using promises is still new to me, and there could be a lot of reasons to describe 
the problems in the original code. In general, I think the issues described in the original
code are related to callbacks, and using promises has made the code cleaner and more understandable.
*/