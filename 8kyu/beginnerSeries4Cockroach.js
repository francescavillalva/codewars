/* 
8kyu_beginner series 4 cockroach
1 april 2022

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

Ex: 1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

// answer
function cockroachSpeed(s) {
    //  1km = 100000cm and 1hr = 3600sec
    return Math.floor(s * 100000 / 3600)
}
