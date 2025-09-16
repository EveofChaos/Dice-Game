'use strict';
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let diceRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
let score0 = (document.querySelector('#score--0').textContent = 0);
let score1 = (document.querySelector('#score--1').textContent = 0);
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');

dice.classList.add('hidden');
let totalScore = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active')
}
diceRoll.addEventListener('click', function () {
    if (playing) {
  let diceRandom = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRandom);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRandom}.png`;
  if (diceRandom !== 1) {
    diceRandom;
    currentScore += diceRandom;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    switchPlayer();
  }}
});
btnHold.addEventListener('click', function () {
  totalScore[activePlayer] += currentScore;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  if(totalScore[activePlayer] >= 100){
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {switchPlayer()}
});
btnNew.addEventListener('click', function() {
    playing = true;
    totalScore = [0, 0];
    score0 = (document.querySelector('#score--0').textContent = 0);
    score1 = (document.querySelector('#score--1').textContent = 0);
    dice.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    activePlayer = 0
})
