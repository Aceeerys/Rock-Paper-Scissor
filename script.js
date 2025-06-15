function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("player-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  let winner = getWinner(playerChoice, computerChoice);
  document.getElementById("winner").textContent = winner;
}

function getWinner(player, computer) {
  if (player === computer) return "🤝 It's a Tie!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "🎉 You Win!";
  } else {
    return "💻 Computer Wins!";
  }
}
