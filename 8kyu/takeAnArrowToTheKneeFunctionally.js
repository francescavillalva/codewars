/*
8kyu take an arrow to the knee functionally
8 may 2022

Come here to practice the Arrow style functions Not much else to say good luck!
Details

You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
*/

var ArrowFunc = function(arr) {
  return arr.map( e => String.fromCharCode(e)).join(''); //Complete this function
}