/*
8kyu_count of positive sum of negatives
27 march 2022

Given an array of integers, return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

Ex: input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] should return [10, -65]
*/

function countPositivesSumNegatives(input) {
  let sum = 0
  let count = 0
  
  if (Array.isArray(input) && input.length) {
    input.forEach(x => x > 0 ? count += 1 : sum += x)
  } else {
    return []
  }
  
  return [count, sum]
}