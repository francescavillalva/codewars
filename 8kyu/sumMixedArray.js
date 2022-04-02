/*
8 kyu sum mixed array
19 Mar 2022

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

function sumMix(x){
  return x.map(num => +num).reduce((acc, curr) => acc + curr, 0)
}