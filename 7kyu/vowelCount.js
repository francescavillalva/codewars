/*
7kyu vowel count
12 may 2022

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return [...str].reduce((sum, e) => sum + ('aeiou'.includes(e) ? 1 : 0), 0)
}