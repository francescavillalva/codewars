/*
8kyu convert a string to an array
30 march 2022

Write a function to split a string and convert it into an array of words.

Ex: 
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string){
    return string.split(' ')
}