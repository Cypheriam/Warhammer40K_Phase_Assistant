const commActive = document.getElementById('comm');
const commandActive = document.getElementById('command');
const moveActive = document.getElementById('move');
const movementActive = document.getElementById('movement');
const psyActive = document.getElementById('psy');
const psychicActive = document.getElementById('psychic');
const shootActive = document.getElementById('shoot');
const shootingActive = document.getElementById('shooting');
const chaActive = document.getElementById('cha');
const chargeActive = document.getElementById('charge');
const fiActive = document.getElementById('fi');
const fightActive = document.getElementById('fight');
const moActive = document.getElementById('mo');
const moraleActive = document.getElementById('morale');

function init() {
    commActive, moveActive, psyActive, shootActive, chaActive, fiActive, moActive.classList.remove('buttonBackgroundActive');
    commandActive, movementActive, psychicActive, shootingActive, chargeActive, fightActive, moraleActive.classList.remove('activeButton');
    commandActive.classList.add('activeButton');
    commActive.classList.add('buttonBackgroundActive');
    moveActive, psyActive, shootActive, chaActive, fiActive, moActive.classList.add('buttonBackground');
}

init();

// console.log(moActive);