/*
8kyu_can we divide it
30 march 2022

Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

Ex:
(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false
*/

function isDivideBy(number, a, b) {
    return (number % a === 0) && (number % b === 0)
}