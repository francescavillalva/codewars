/*
8kyu_expressions matter
1 april 2022

Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
*/

function expressionMatter(a, b, c) {
    const num1 = a * b * c
    const num2 = a + b + c
    const num3 = a * b + c
    const num4 = a * (b + c)
    const num5 = a + b * c
    const num6 = (a + b) * c
    
    return Math.max(num1, num2, num3, num4, num5, num6)
}