/*
8kyu_quarter of the year
30 march 2022

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

Ex: 
month 2 (February), is part of the first quarter
month 6 (June), is part of the second quarter
month 11 (November), is part of the fourth quarter
*/

const quarterOf = (month) => {
    return Math.ceil(month / 3)
  }