/*
8kyu is it a palindrome
7 april 2022

Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    let y = x.toLowerCase()
    return y === y.split('').reverse().join('')
}