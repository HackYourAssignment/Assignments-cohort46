'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-4-shopping-at-the-supermarket

Let's do some grocery shopping! We're going to get some things to cook dinner
with. However, you like to spend money and always buy too many things. So when 
you have more than 3 items in your shopping cart the first item gets taken out.

1. Create an array called `shoppingCart` that holds the following strings: 
  "bananas" and "milk".

2. Complete the function named `addToShoppingCart` as follows:

  - It should take one argument: a grocery item (string)
  - It should add the grocery item to `shoppingCart`. If the number of items is
    more than three remove the first one in the array.
  - It should return a string "You bought <list-of-items>!", where 
    <list-of-items>is a comma-separated list of items from the shopping cart 
    array.

3. Confirm that your code passes the unit tests.
-----------------------------------------------------------------------------*/

const shoppingCart = ['bananas', 'milk'];

// ! Function to be tested
function addToShoppingCart(groceryItem) {

  if (!groceryItem || groceryItem.trim() === "") {
    return "Invalid item. Please provide a valid grocery item.";
  };

  if (shoppingCart.length === 3) {
    shoppingCart.shift(); // Remove the first item if there are more than three items
  }

  shoppingCart.push(groceryItem); // Add the new grocery item to the end of the array

  // Create a comma-separated list of items from the shopping cart
  const itemList = shoppingCart.join(", ");

  return `You bought ${itemList}!`;
}

// Example usage:
console.log(addToShoppingCart("eggs")); // You bought milk, eggs!
console.log(addToShoppingCart("bread")); // You bought milk, eggs, bread!
console.log(addToShoppingCart("cheese")); // You bought eggs, bread, cheese!
console.log(addToShoppingCart("tomatoes")); // You bought bread, cheese, tomatoes!

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log(
    'Test 1: addShoppingCart() called without an argument should leave the shopping cart unchanged'
  );
  const expected = 'You bought bananas, milk!';
  const actual = addToShoppingCart();
  console.assert(actual === expected);
}

function test2() {
  console.log('Test 2: addShoppingCart() should take one parameter');
  const expected = 1;
  const actual = addToShoppingCart.length;
  console.assert(actual === expected);
}

function test3() {
  console.log('Test 3: `chocolate` should be added');
  const expected = 'You bought bananas, milk, chocolate!';
  const actual = addToShoppingCart('chocolate');
  console.assert(actual === expected);
}

function test4() {
  console.log('Test 4: `waffles` should be added and `bananas` removed');
  const expected = 'You bought milk, chocolate, waffles!';
  const actual = addToShoppingCart('waffles');
  console.assert(actual === expected);
}

function test5() {
  console.log('Test 5: `tea` should be added and `milk` removed');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

test();