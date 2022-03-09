/*
8kyu enumerable magic 4 true for none
11 may 2022

Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/

function none(arr, fun){
  return !arr.some(fun)
}