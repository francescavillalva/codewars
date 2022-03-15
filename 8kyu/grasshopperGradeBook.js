/*
8kyu_grasshopper grade book
1 april 2022

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (s1, s2, s3) {
    const grades = [s1, s2, s3]
    
    const avg = grades.reduce((acc, c) => acc + c, 0) / grades.length
    
    switch (Math.floor(avg / 10)) {
        case 10:
        case 9:
          return 'A'
        case 8:
          return 'B'
        case 7:
          return 'C'
        case 6:
          return 'D'
        default:
          return 'F'
    }
}