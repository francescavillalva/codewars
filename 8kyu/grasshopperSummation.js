/*
8kyu_grasshopper summation
24 Mar 2022

Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

ex: 
summation(2) -> 3 because 1 + 2
summation(8) -> 36 because 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
      sum += i
    }
    return sum
}