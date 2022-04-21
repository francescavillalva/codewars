/*
8kyu smallest unused id
25 april 2022

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
*/

function nextId(ids){
  const idsSorted = ids.sort((a, b) => a - b)

  if (idsSorted[0] !== 0) {
    return 0
  }
  
  for(let i = 0; i < idsSorted.length; i++) {
    if (idsSorted[i] + 1 !== idsSorted[i + 1] && idsSorted[i] !== idsSorted[i + 1]) {
      return idsSorted[i] + 1
    }
  }
}