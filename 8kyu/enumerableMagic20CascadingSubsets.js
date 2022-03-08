/*
8kyu enumerable magic 20 cascading subsets
12 may 2022

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(array, n) {
  let arr = []
  let i = 0
  while (i <= array.length - n) {
    arr.push(array.slice(i, i + n))
    i++
  }
  return arr
}