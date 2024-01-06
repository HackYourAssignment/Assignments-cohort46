'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
  should be a grocery item (like `beers` or `chips`) and hold a number value
  (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

  - It takes one parameter: an object that contains properties that only contain
    number values.
  - Loop through the object and add all the number values together.
  - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  chips: 1.90,
  cake: 3,
  banana: 1,
  cola: 2.40,
  cookies: 1.50,
  popcorn: 1
};

// Calculate total price function
function calculateTotalPrice(cart) {
  return cart.reduce(function (accumulated, current) {
    return accumulated + current.preis;
  }, 0);
}

let totalPreis = calculateTotalPrice(cartForParty);

console.log(`Total: ${totalPreis}`);

// Test functions
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const result = calculateTotalPrice.length === 1 ? 'Pass' : 'Fail';
  console.log(result);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const result = calculateTotalPrice(cartForParty) === 10.80 ? 'Pass' : 'Fail';
  console.log(result);
}

// Run tests
test();

