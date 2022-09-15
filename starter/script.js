'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');
const diceE = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;

diceE.classList.add('hidden');

//button Rolling

btnRollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceE.classList.remove('hidden');
  diceE.src = `dice-${dice}.png`;
  console.log(dice);
});
