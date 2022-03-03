/*
8kyu removing elements
3 april 2022

Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Ex: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    return arr.filter((e, i) => i % 2 === 0)
}