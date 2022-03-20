/*
8 kyu find the smallest integer in the array
23 Mar 2022

Given an array of integers your solution should find the smallest integer.

Ex:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    // array spreader (...) allows Math.min to work with arrays
    return Math.min(...args)
  }
}