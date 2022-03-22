/*
8kyu find numbers which are divisible by given number
3 april 2022

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Ex: divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/

function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
}