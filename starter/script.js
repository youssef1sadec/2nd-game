'use strict';
// slelect element
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
// put the conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
//finally score
let scoreEl_0 = score0El.innerHTML;
let scoreEl_1 = score1El.innerHTML;
let dicePic;
//score
let cScore0 = +currentScore0.innerHTML;
let cScore1 = +currentScore1.innerHTML;
let count;
// genreant
  btnRoll.addEventListener('click', () => {
    count = Math.trunc(Math.random() * 6) + 1;
    dicePic = diceEl.src = `dice-${count}.png`;
    // console.log(dicePic);
    diceEl.classList.remove('hidden');
    if (count !== 1) {
      if (player1.classList[2] === 'player--active') {
        // console.log('0 player is playing ');
        cScore0 = cScore0 + count;
        currentScore0.textContent = cScore0;
        // console.log(cScore0, count, 'here');
      }
      if (player2.classList[2] === 'player--active') {
        // console.log('2nd player is playing');
        cScore1 = cScore1 + count;
        // console.log(cScore1);
        currentScore1.innerHTML = cScore1;
      }
    } else if (count === 1) {
      cScore0 = 0;
      cScore1 = 0;
      currentScore0.textContent = cScore0;
      currentScore1.innerHTML = cScore1;
      switchb();
    }
  });
  function switchb() {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
  btnHold.addEventListener('click', () => {
    if (cScore0 !== 0) {
      // console.log(cScore0, scoreEl_0);
      scoreEl_0 = +scoreEl_0 + cScore0;
      cScore0 = 0;
      score0El.innerHTML = scoreEl_0;
      currentScore0.textContent = 0;
      if (scoreEl_0 >= 100) {
        // add win class
        player1.classList.add('player--winner');
        btnHold.classList.add('hidden');
        btnRoll.classList.add('hidden');
      } 
      switchb();
    } else if (cScore1 !== 0) {
      // console.log(cScore1, scoreEl_1);
      scoreEl_1 = +scoreEl_1 + cScore1;
      cScore1 = 0;
      score1El.innerHTML = scoreEl_1;
      currentScore1.textContent = 0;
      switchb();
    }
    if (scoreEl_1 >= 100) {
      // add win class
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
      player2.classList.add('player--winner');
    } 
  });
  btnNew.addEventListener('click', () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    cScore0 = 0;
    cScore1 = 0;
    scoreEl_0 = 0;
    scoreEl_1 = 0;
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');
    currentScore1.textContent = 0;
    diceEl.classList.add('hidden');
  });