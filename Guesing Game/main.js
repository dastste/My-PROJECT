let guessInput = document.querySelector('#enter-guess');
let guessButton = document.querySelector('#button');
let guess = document.querySelector('.result-guess');
let lowHi = document.querySelector('.lowhi');
let preGuess = document.querySelector('.Num-guess');
let randomNum = Math.floor(Math.random() * 100);
let resetBtn;
let guessCount = 1;

function userGuess() {
  let user = Number(guessInput.value)
  if (guessCount === 1) {
    preGuess.textContent = 'previous guess: ';
  }
  preGuess.textContent += user + ' ';
  if (user === randomNum) {
    guess.textContent = 'Congratulations your guess was correct!';
    guess.style.backgroundColor = 'green';
    guess.style.height = '30px';
    guess.style.lineHeight = '30px';
    lowHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    guess.textContent = 'You ran out of guess';
    guess.style.backgroundColor = 'yellow';
    guess.style.height = '30px';
    guess.style.lineHeight = '30px';
    lowHi.textContent = '';
    setGameOver();

  } else {
    guess.textContent = '!Wrong!';
    guess.style.backgroundColor = 'red';
    guess.style.height = '30px';
    guess.style.lineHeight = '30px';
  };

  if (user > randomNum) {
    lowHi.textContent = 'Your last guess was too high';
  } else if (user < randomNum) {
    lowHi.textContent = 'Your last guess was too low';
  };

  guessCount++;
  guessInput.focus();
  guessInput.value = '';
};

guessButton.addEventListener('click', userGuess);

function setGameOver() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  resetBtn = document.createElement('button');
  resetBtn.textContent = 'Play again';
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener('click', resetGame)
};
function resetGame() {
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessCount = 1;
  resetBtn.parentNode.removeChild(resetBtn);
  let allElement = document.querySelectorAll('.all-turns p');
  for (let i = 0; i < allElement.length; i++) {
    allElement[i].textContent = '';

    guess.style.backgroundColor = 'white';
    randomNum = Math.floor(Math.random() * 100);
    guessCount++;
    guessInput.focus();
    guessInput.value = '';
  }
}
