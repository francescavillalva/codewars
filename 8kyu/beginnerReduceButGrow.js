/*
8kyu beginner reduce but grow
29 march 2022

Given a non-empty array of integers, return the result of multiplying the values together in order. 

Ex: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
    return x.reduce((acc, c) => acc * c, 1)
}