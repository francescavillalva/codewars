/*
8kyu wilson primes
10 may 2022

Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

function amIWilson(p) {
  return (([...Array(p - 1)].map((e, i) => p - 1 - i).reduce((prod, e) => prod * e, 1) + 1) / (p * p)) % 1 === 0 
}