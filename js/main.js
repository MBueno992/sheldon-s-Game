'use strict';

//Variables
const inputName = document.querySelector('.js-inputName');
const gameOption = document.querySelectorAll('.js-gameOption');
const playBtn = document.querySelector('.js-playBtn');
const player = document.querySelector('.js-player');
const playerSelect = document.querySelector('.js-playerSelect');
const sheldonSelect = document.querySelector('.js-sheldonSelect');
const condition = document.querySelector('.js-condition');
const msg = document.querySelector('.js-msg');
const rules = document.querySelector('.js-rules');
const reset = document.querySelector('.js-reset');

const getRandomNumber = () => {
  return Math.ceil(Math.random() * 5);
};
const sheldonMove = () => {
  const move = getRandomNumber();
  if (move === 1) {
    sheldonSelect.src = './img/piedra.png';
  } else if (move === 2) {
    sheldonSelect.src = './img/Spock.png';
  } else if (move === 3) {
    sheldonSelect.src = './img/papel.png';
  } else if (move === 4) {
    sheldonSelect.src = './img/tijeras.png';
  } else {
    sheldonSelect.src = './img/Lagarto.png';
  }
};

const getUserName = () => {
  const user = inputName.value;
  player.innerHTML = user;
};

const handleSelect = (event) => {
  const userOption = event.target.src;
  playerSelect.src = userOption;
};

inputName.addEventListener('input', getUserName);
gameOption.forEach((option) => option.addEventListener('click', handleSelect));
