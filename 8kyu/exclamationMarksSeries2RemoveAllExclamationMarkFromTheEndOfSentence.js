/*
8kyu exclamation marks series 2: remove all exclamation marks from the end of sentence
26 april 2022

*/

function remove (string) {  
  let newStr = string
  while (newStr.endsWith('!')) {
    newStr = newStr.slice(0, -1)
  }
  return newStr
}