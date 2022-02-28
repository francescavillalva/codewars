/*
8kyu_remove exclamation marks
30 march 2022

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
    return s.split('!').join('')
}