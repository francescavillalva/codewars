/*
8kyu_sum of positive
24 Mar 2022

You get an array of numbers, return the sum of all of the positives ones.
If there is nothing to sum, the sum is default to 0.  

Ex: [1,-4,7,12] => 1 + 7 + 12 = 20
*/

function positiveSum(arr) {
    return arr.reduce((acc, curr) => curr >= 0 ? acc + curr : acc, 0)
}