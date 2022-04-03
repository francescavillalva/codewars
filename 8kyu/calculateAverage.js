/*
8kyu_calculate average
27 march 2022

Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function find_average(array) {
  return array.length ? array.reduce((acc, c) => acc + c, 0)/array.length : 0
}