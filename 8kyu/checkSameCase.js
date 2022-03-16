/*
8kyu check same case
29 april 2022

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b){
  if (a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()) return -1
  return a === a.toUpperCase() && b === b.toUpperCase() ? 1 :
         a === a.toLowerCase() && b === b.toLowerCase() ? 1 : 0
}