/*
8kyu get character from ascii value
10 april 2022

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Ex:
get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/
*/

function getChar(c){
    return String.fromCharCode(c)
}