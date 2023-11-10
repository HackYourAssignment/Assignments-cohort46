'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-5-improved-shopping-at-the-supermarket

In the current exercise we will rewrite the `addToShoppingCart` function to make 
it pure. Do the following:

1. Complete the parameter list of `addToShopping()`. As a first parameter it 
  should accept a shopping cart array and as a second parameter it should 
  accept a grocery item to be added.
2. The function should return a new shopping cart array, following the same rule 
  as in the previous exercise: it should contain a maximum of three items.
3. The shopping cart passed as an argument should not be mutated.
4. When constructing the new shopping cart array you should make use of the ES6 
  spread syntax.
5. Confirm that you function passes the provided unit tests.
------------------------------------------------------------------------------*/


let shoppingCart = ["bananas", "milk"];

function addToShoppingCart(item , ...more) {
  shoppingCart.push(item && more);

  if (shoppingCart.length <=3) {
    shoppingCart.shift();
  }

  let groceries = shoppingCart.join(",");
  return `You bought ${groceries}`;
}

console.log(addToShoppingCart("hummus","coch"));