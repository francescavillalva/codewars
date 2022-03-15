/*
8kyu what is between
8 april 2022

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

Ex:
a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    let range = []
    for (let i = a; i <= b; i++) {
      range.push(i)
    }
    return range
}