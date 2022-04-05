/*
8kyu grasshopper - terminal game move function
4 april 2022

In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Ex: move(3, 6) should equal 15
*/

function move (position, roll) {
    return position + roll * 2
}