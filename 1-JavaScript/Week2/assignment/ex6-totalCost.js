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
  chocolate: 2.99,
  chips: 2.79,
  cocaCola: 1.99,
  bread: 0.99,
  rice: 2.5,
};
// I found this method via: https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/

function calculateTotalPrice(cartForParty) {
  let totalCost = 0;
  let products = Object.keys(cartForParty);

  products.forEach((product) => {
    totalCost = totalCost + cartForParty[product];
  });

  let resultString = `Total: €${totalCost}`;

  console.log(resultString);
  return resultString;
}
calculateTotalPrice(cartForParty);

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const cart = {
    item1: 1.99,
    item2: 0.52,
    item3: 0.66,
  };
  const result = calculateTotalPrice(cart);

  if (typeof result === 'string') {
    console.log('Test 1 Passed!');
  } else {
    console.error(
      'Test 1 Failed. calculateTotalPrice did not return a string.'
    );
  }
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const cartForParty = {
    chocolate: 2.99,
    chips: 2.79,
    cocaCola: 1.99,
    bread: 0.99,
    rice: 2.5,
  };

  const result = calculateTotalPrice(cartForParty);
  const expectedOutput = 'Total: €11.26';

  if (result === expectedOutput) {
    console.log('Test 2 Passed!');
  } else {
    console.error(
      'Test 2 Failed. Expected:',
      expectedOutput,
      'Actual:',
      result
    );
  }
}

function test() {
  test1();
  test2();
}

test();
