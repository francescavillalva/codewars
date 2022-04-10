/*
8kyu vowel remover
9 april 2022

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Ex:
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

function shortcut (string) {
    //let vowels = 'aeiou'
    return string.split('').filter(e => !'aeiou'.includes(e)).join('')
}