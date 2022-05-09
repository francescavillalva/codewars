/*
8kyu be concise iv index of an element in an array
9 may 2022

Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
*/

const find = (array, element) => array.indexOf(element) < 0 ? 'Not found' : array.indexOf(element)