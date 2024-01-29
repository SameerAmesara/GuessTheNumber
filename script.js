'use strict';

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 25) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetGame = function () {
  displayMessage('🤔 Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '25';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const playAgain = function () {
  secretNumber = getRandomNumber(1, 25);
  resetGame();
};

const checkNumber = function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  if (!guessNumber) {
    displayMessage('⚠️ No Number! ⚠️');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber === secretNumber) {
    displayMessage('🎉 Correct Number! 🎉');
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (h_score < score) {
      h_score = score;
      document.querySelector('.highscore').textContent = h_score;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? '📈 Too High! 📈' : '📉 Too Low! 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😵💥 Game Over! 💥😵');
      document.querySelector('body').style.backgroundColor = '#8b0000';
      document.querySelector('.score').textContent = 0;
    }
  }
};

let secretNumber = getRandomNumber();
let h_score = 0;

// Play Again Event Handler
document.querySelector('.again').addEventListener('click', playAgain);

// Check Event Handler
document.querySelector('.check').addEventListener('click', checkNumber);
