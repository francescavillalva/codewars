/*
8kyu exclamation marks series #11: replace all vowel to exclamation mark in the sentence
11 april 2022

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Ex:
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
    return s.replace(/[aeiou]/gi, '!')
}