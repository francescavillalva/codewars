/*
8kyu sum without highest or lowest numbers

Sum all the numbers of a given array, except the highest and the lowest numbers.
If an empty value is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

Ex:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

function sumArray(array) {

    // array validation
    if (!Array.isArray(array) || array.length < 3) {
      return 0
    } else {
      
        // find the highest number
        let highestNum = array.reduce((acc, curr) => acc > curr ? acc : curr)

        // find the lowest number
        let lowestNum = array.reduce((acc, curr) => acc < curr ? acc : curr)

        // summ all elements in array and subtract the highest amd lowest
        let sum = array.reduce((acc, curr) => acc + curr) - highestNum - lowestNum
        
        return sum
    }
  }