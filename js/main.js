'use strict';

//Variables
const gameOption = document.querySelectorAll('.js-gameOption');
const playBtn = document.querySelector('.js-playBtn');
const player = document.querySelector('.js-player');
const playerSelect = document.querySelector('.js-playerSelect');
const sheldonSelect = document.querySelector('.js-sheldonSelect');
const condition = document.querySelector('.js-condition');
const msg = document.querySelector('.js-msg');
const reset = document.querySelector('.js-reset');
const playerScore = document.querySelector('.js-playerScore');
const sheldonScore = document.querySelector('.js-sheldonScore');
const modalMsg = document.querySelector('.js-modal');
const finalMsg = document.querySelector('.js-finalMsg');
const sheldonFinal = document.querySelector('.js-sheldonimg');
const closeBtn = document.querySelector('.js-closeBtn');

let user = 0;
let pc = 0;

const getRandomNumber = () => {
  return Math.ceil(Math.random() * 5);
};
const sheldonMove = () => {
  let sheldonOption = '';

  const move = getRandomNumber();
  if (move === 1) {
    sheldonOption = 'rock';
    sheldonSelect.src = './img/piedra.png';
  } else if (move === 2) {
    sheldonOption = 'spock';
    sheldonSelect.src = './img/Spock.png';
  } else if (move === 3) {
    sheldonOption = 'paper';
    sheldonSelect.src = './img/papel.png';
  } else if (move === 4) {
    sheldonOption = 'scissors';
    sheldonSelect.src = './img/tijeras.png';
  } else {
    sheldonOption = 'lizard';
    sheldonSelect.src = './img/Lagarto.png';
  }
  return sheldonOption;
};

const handleSelect = (event) => {
  playerSelect.src = event.target.src;
  playerSelect.id = event.target.id;
};
const gameRules = () => {
  const userMove = playerSelect.id;
  if (userMove === '') {
    msg.innerHTML = 'Selecciona una opción antes de de jugar';
    playerScore.innerHTML = 'Jugador/a';
    sheldonScore.innerHTML = 'Sheldon';
  } else {
    const sheldon = sheldonMove();
    if (userMove === sheldon) {
      msg.innerHTML = 'Ha sido un golpe de suerte, empate.';
    } else if (userMove === 'rock' && sheldon === 'scissors') {
      condition.innerHTML = 'Piedra aplasta tijera';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'scissors' && sheldon === 'paper') {
      condition.innerHTML = 'Tijeras corta a papel';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'paper' && sheldon === 'rock') {
      condition.innerHTML = 'Papel tapa a piedra';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'rock' && sheldon === 'lizard') {
      condition.innerHTML = 'Piedra aplasta a lagarto';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'lizard' && sheldon === 'spock') {
      condition.innerHTML = 'Lagarto envenena a Spock';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'spock' && sheldon === 'scissors') {
      condition.innerHTML = 'Spock rompe tijeras';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'scissors' && sheldon === 'lizard') {
      condition.innerHTML = 'Tijera decapita a lagarto';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'lizard' && sheldon === 'paper') {
      condition.innerHTML = 'Lagarto devora a papel';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'paper' && sheldon === 'spock') {
      condition.innerHTML = 'Papel desautoriza a Spock';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (userMove === 'spock' && sheldon === 'rock') {
      condition.innerHTML = 'Spock vaporiza a piedra';
      msg.innerHTML = '¡Porras, me has ganado!';
      user++;
    } else if (sheldon === 'rock' && userMove === 'scissors') {
      condition.innerHTML = 'Piedra aplasta tijera';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'scissors' && userMove === 'paper') {
      condition.innerHTML = 'Tijeras corta a papel';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'paper' && userMove === 'rock') {
      condition.innerHTML = 'Papel tapa a piedra';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'rock' && userMove === 'lizard') {
      condition.innerHTML = 'Piedra aplasta a lagarto';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'lizard' && userMove === 'spock') {
      condition.innerHTML = 'Lagarto envenena a Spock';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'spock' && userMove === 'scissors') {
      condition.innerHTML = 'Spock rompe tijeras';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'scissors' && userMove === 'lizard') {
      condition.innerHTML = 'Tijera decapita a lagarto';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'lizard' && userMove === 'paper') {
      condition.innerHTML = 'Lagarto devora a papel';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (sheldon === 'paper' && userMove === 'spock') {
      condition.innerHTML = 'Papel desautoriza a Spock';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    } else if (userMove === 'spock' && sheldon === 'rock') {
      condition.innerHTML = 'Spock vaporiza a piedra';
      msg.innerHTML = '¡La ciencia gana y tú has perdido';
      pc++;
    }
    paintScore();
    finishGame();
  }
};
const paintScore = () => {
  playerScore.innerHTML = `Jugador/a: ${user}`;
  sheldonScore.innerHTML = `Sheldon: ${pc}`;
};
const finishGame = () => {
  if (user === 5) {
    modalMsg.classList.remove('hidden');
    finalMsg.innerHTML = '¡Porras, me has ganado!';
    sheldonFinal.src = './img/lose.gif';
  }
  if (pc === 5) {
    modalMsg.classList.remove('hidden');
    finalMsg.innerHTML = '¡Te he ganado! La victoria era inevitable.';
    sheldonFinal.src = './img/win.gif';
  }
};

const resetGame = () => {
  user = 0;
  pc = 0;
  msg.innerHTML = '¿Listo para la derrota?';
  playerScore.innerHTML = 'Jugador/a';
  sheldonScore.innerHTML = 'Sheldon';
  sheldonSelect.src = '';
  playerSelect.src = '';
  playerSelect.id = '';
  condition.innerHTML = '';
};

const closeModal = () => {
  modalMsg.classList.add('hidden');
  resetGame();
};

gameOption.forEach((option) => option.addEventListener('click', handleSelect));
playBtn.addEventListener('click', gameRules);
reset.addEventListener('click', resetGame);
closeBtn.addEventListener('click', closeModal);
