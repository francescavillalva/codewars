/*
8kyu exclamation marks series 1: remove an exclamation mark from the end of string
25 april 2022

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Ex:
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove (string) {
  return string.endsWith('!') ? string.slice(0, -1) : string
}