/*
8kyu drink about
7 april 2022

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

Ex:
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

function peopleWithAgeDrink(old) {
    return  old >= 21 ? 'drink whisky' :
            old < 14 ? 'drink toddy' :
            old < 18 ? 'drink coke' : 'drink beer'
}