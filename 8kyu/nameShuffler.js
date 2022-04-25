/*
8kyu name shuffler
25 april 2022

Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"
*/

function nameShuffler(str){
  const arr = str.split(' ')
  return [arr[1], arr[0]].join(' ')
}