/*
8kyu_reversed strings
24 Mar 2022

Complete the solution so that it reverses the string passed into it.
Ex: 
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
  return str.split('').reverse().join('')
}