/*
8kyu_square(n) sum
24 Mar 2022

Complete the square sum function so that it squares each number passed into it and then sums the results together.
Ex: [1, 2, 2] -> 9 because 1^2 + 2^2 + 2^2 = 9
*/

function squareSum(numbers){
    return numbers.map(x => x * x).reduce((acc, curr) => acc + curr, 0)
}