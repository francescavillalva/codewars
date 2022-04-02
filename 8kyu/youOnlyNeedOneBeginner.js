/*
8 kyu you only need one beginner
19 Mar 2022

You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.

The array can contain numbers or strings. x can be either.
Return true if the array contains the value, false if not.
*/

function check(a, x) {
  return a.includes(x)
}