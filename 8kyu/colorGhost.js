/*
8kyu color ghost
26 april 2022

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

var Ghost = function() {
  this.colors = ['white', 'yellow', 'purple', 'red']
  this.color = this.colors[Math.floor(Math.random() * 4)]
}