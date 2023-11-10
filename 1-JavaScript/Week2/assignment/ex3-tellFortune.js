'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

function selectRandomly(numKids, partnerNames, locations, jobTitles) {
  const randomlySelectedIndex1 = Math.floor(Math.random() * numKids.length);
  const randomlySelectedIndex2 = Math.floor(
    Math.random() * partnerNames.length
  );
  const randomlySelectedIndex3 = Math.floor(Math.random() * locations.length);
  const randomlySelectedIndex4 = Math.floor(Math.random() * jobTitles.length);

  const randomlySelectedElement1 = numKids[randomlySelectedIndex1];
  const randomlySelectedElement2 = partnerNames[randomlySelectedIndex2];
  const randomlySelectedElement3 = locations[randomlySelectedIndex3];
  const randomlySelectedElement4 = jobTitles[randomlySelectedIndex4];

  // Return the randomly selected elements in an object
  return {
    numKids: randomlySelectedElement1,
    partnerName: randomlySelectedElement2,
    location: randomlySelectedElement3,
    jobTitle: randomlySelectedElement4,
  };
}

function tellFortune(
  numKidsOptions,
  partnerNamesOptions,
  locationsOptions,
  jobTitlesOptions
) {
  const { numKids, partnerName, location, jobTitle } = selectRandomly(
    numKidsOptions,
    partnerNamesOptions,
    locationsOptions,
    jobTitlesOptions
  );

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKids} kids.`;
}

function main() {
  const numKids = [1, 2, 3, 4, 5];
  const partnerNames = ['Adele', 'Charlotte', 'Sara', 'Willem', 'Ada'];
  const locations = ['Amsterdam', 'Tilburg', 'Utrecht', 'Groningen', 'Paris'];
  const jobTitles = [
    'doctor',
    'teacher',
    'nurse',
    'gardener',
    'full stack developer',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
