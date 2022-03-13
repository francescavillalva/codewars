/*
8kyu exclamation mark series 4: remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
28 april 2022

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Ex:
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/

function remove (string) {
  return string.replace(/!/g, '') + '!'
}