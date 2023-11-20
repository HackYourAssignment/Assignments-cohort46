'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-3-lemon-allergy

Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
------------------------------------------------------------------------------*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(fruitBasket, fruitNeedsRemove) {
  const cleanFruitsBasket = fruitBasket.filter(fruit => fruit !== fruitNeedsRemove);
  return cleanFruitsBasket;

}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
   expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
   sanitizeFruitBasket(fruitBasket, lemon)
    expect(fruitBasket).toEqual(originalFruitBasketContents); 
  });
    // ! toEqual: Used when you want to check that two objects have the same value. This matcher recursively checks the equality of all fields, rather than checking for object identity.
    // ! Optionally, you can provide a type for the expected value via a generic. This is particularly useful for ensuring expected objects have the right structure.
  
    test('should return a new array that does not include the unwanted `lemon`', () => {
      const cleanFruitsBasket = sanitizeFruitBasket(fruitBasket, 'lemon');
      expect(cleanFruitsBasket).toEqual([
           'apple',
           'grapefruit',
           'banana',
           'watermelon',
         ]);
    });
  });
  
  //! can we put it like this ?!
  
  
  // test('should return a new array that does not include the unwanted `lemon`', () => {
  //     const cleanFruitsBasket = sanitizeFruitBasket(fruitBasket, 'lemon');
  //     expect(cleanFruitsBasket).not.toContain('lemon');
  //   });
  
