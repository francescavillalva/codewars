/*
8kyu i love you a little a lot passionately not at all
4 april 2022

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

// using switch 
// function howMuchILoveYou(nbPetals) {
//     switch(nbPetals % 6) {
//         case 1: return 'I love you'
//         case 2: return 'a little'
//         case 3: return 'a lot'
//         case 4: return 'passionately'
//         case 5: return 'madly'
//         case 0: return 'not at all'
//     }
// }

// using objects
function howMuchILoveYou(nbPetals) {
    const phrase = {
      1: 'I love you',
      2: 'a little',
      3: 'a lot',
      4: 'passionately',
      5: 'madly',
      0: 'not at all'
    }
    return phrase[nbPetals % 6]
  }
  
  