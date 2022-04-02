/*
8kyu_abbreviate a two word name
27 march 2022

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

Ex: 
Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name){
    const abbr = name.split(' ')
    return `${abbr[0][0]}.${abbr[1][0]}`.toUpperCase()
}