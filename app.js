let playGame = confirm('Shall we play Rock, Paper, Scissors?');
if (playGame) {
  let playerChoice = prompt('Please enter Rock, Paper or Scissors');
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === 'rock' ||
      playerOne === 'paper' ||
      playerOne === 'scissors'
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? 'rock'
          : computerChoice === 2
          ? 'paper'
          : 'scissors';
      let result =
        playerOne === computer
          ? 'Tie Game!'
          : playerOne === 'rock' && computer === 'paper'
          ? `playerOne: ${playerOne}\nComputer: ${computer}
         \nComputer wins!`
          : playerOne === 'paper' && computer === 'scissors'
          ? `playerOne: ${playerOne}\nComputer: ${computer}
         \nComputer wins!`
          : playerOne === 'scissors' && computer === 'rock'
          ? `playerOne: ${playerOne}\nComputer: ${computer}
         \nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}
         \nplayerOne wins!`;

      alert(result);

      let playAgain = confirm('Play Again?');
      playAgain ? location.reload() : alert('ok, thanks for playing.');
    } else {
      alert('You did not enter Rock, Paper or Scissors');
    }
  } else {
    alert('I guess you changed your mind, maybe next time');
  }
} else {
  alert('Ok, maybe next time');
}
