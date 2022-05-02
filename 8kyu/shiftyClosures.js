/*
8kyu shifty closures
9 may 2022

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

var abe = 'Abe';
var greet_abe = function() {
  return "Hello, " + abe + '!';
};
let ben = 'Ben';
var greet_ben = function() {
  return "Hello, " + ben + '!';
};