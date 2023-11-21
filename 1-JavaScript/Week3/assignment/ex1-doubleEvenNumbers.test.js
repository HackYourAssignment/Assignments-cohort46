/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-1-the-odd-ones-out

The `doubleEvenNumbers` function returns only the even numbers in the array 
passed as the `numbers` parameter and doubles them.

Let's rewrite it (or _refactor_ it, as experienced developers would call it):

- Using the `map` and `filter` functions, rewrite the function body of
`doubleEvenNumbers`.
------------------------------------------------------------------------------*/
// ! Function to be tested
function doubleEvenNumbers(numbers) {
 
  return numbers.filter(function(number) {
    return number % 2 === 0;
  })
  .map(function(evenNumber) {
    return evenNumber * 2;
  });
}

// Example
let result = doubleEvenNumbers([1, 2, 3, 4]);
console.log(result);




// ! second methods 

// function doubleEvenNumbers(numbers) {

//   const newNumbers = [];
//   for (let i of numbers) {
//     if (numbers[i] % 2 === 0) {

//       newNumbers.push(numbers[i] * 2);
//     }
//   }
// }
//   return newNumbers;

// ! Unit test (using Jest)
// test('doubleEvenNumbers should take the even numbers and double them', () => {
//   const actual = doubleEvenNumbers([1, 2, 3, 4]);
//   const expected = [4, 8];
//   expect(actual).toEqual(expected);
// });
