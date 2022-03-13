/*
8kyu Lario and Muigi Pipe Problem 
11 april 2022

Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

Ex: 1,3,5,6,7,8 -> 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers){
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  
  return Array.from(Array(max - min + 1), (e, i) => min + i)
}