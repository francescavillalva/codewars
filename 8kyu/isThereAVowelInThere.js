/*
8kyu is there a vowel in there
29 april 2022

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
  return a.map( e => e === 97   ? 'a' :
                     e === 101  ? 'e' :
                     e === 105  ? 'i' :
                     e === 111  ? 'o' :
                     e === 117  ? 'u' : e)
}