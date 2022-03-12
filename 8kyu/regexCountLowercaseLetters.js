/*
8kyu regex count lowercase letters
11 may 2022

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

function lowercaseCount(str){
  let count = 0
  str.split('').forEach( x => {
    if (x.toLowerCase() === x.toUpperCase()) return 0
    if (x === x.toLowerCase()) return count++
  })
  return count
}