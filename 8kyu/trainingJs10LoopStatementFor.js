/*
8kyu training js 10: loop statement for
29 april 2022

Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.
*/

function pickIt(arr){
  var odd=[],even=[];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i])
  }
  
  return [odd,even];
}