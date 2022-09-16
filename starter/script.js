'use strict';

const player0El = document.querySelector('.player--0');
const player01El = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceE = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;

diceE.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//button Rolling

btnRollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceE.classList.remove('hidden');
  diceE.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0EL.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player01El.classList.toggle('player--active');
  }
});
