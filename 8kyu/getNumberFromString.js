/*
8kyu get number from string
4 may 2022

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
  const nums = '0123456789'
  return Number(s.split('').filter(e => nums.includes(e)).join(''))
}