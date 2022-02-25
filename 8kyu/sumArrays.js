/* 
8kyu_sum arrays
27 march 2022

Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Ex:
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions:
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
*/

// using for loop
function sum (numbers) {
  let sumfn = 0
  if (numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      sumfn += numbers[i]
      }
    } else {
      return 0
    }
  return sumfn
}

// using array methods
function sum (numbers) {
  return numbers.length ? numbers.reduce((acc, c) => acc + c) : 0
}