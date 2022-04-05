/*
8kyu_counting sheep
24 Mar 2022

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

Ex: 
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
*/

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce( (acc, curr) => curr ? acc += 1 : acc, 0)
}