/* 
8 kyu rock paper scissors
19 Mar 2022

Let's play! You have to return which player won! In case of a draw return Draw!.

Ex:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  
    if (p1 === p2) {
      return 'Draw!'
    } else if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  };