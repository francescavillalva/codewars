/*
8kyu return two highest values in list
9 may 2022

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
  if (arr.length < 2) return arr
  let uniqueArr = [...new Set(arr)]  
  let max1 = Math.max(...uniqueArr)
  let max2 = 0
  for (let i = 0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] > max2 && uniqueArr[i] < max1) {
      max2 = uniqueArr[i]
    }
  }
  return [max1, max2]
}