/*

7 kyu string ends with
22 Mar 2022

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Ex:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

// answer
function solution(str, ending){
    return str.slice(str.length - ending.length) === ending  
  }