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

document.querySelector('main').addEventListener('click', onClick);

function onClick() {
    if(commActive.classList.contains('buttonBackgroundActive'), commandActive.classList.contains('activeButton')) {
        commActive.classList.remove('buttonBackgroundActive');
        commandActive.classList.remove('activeButton');
        moveActive.classList.add('buttonBackgroundActive');
        movementActive.classList.add('activeButton');
    } else if(moveActive.classList.contains('buttonBackgroundActive'), movementActive.classList.contains('activeButton')) {
        moveActive.classList.remove('buttonBackgroundActive');
        movementActive.classList.remove('activeButton');
        psyActive.classList.add('buttonBackgroundActive');
        psychicActive.classList.add('activeButton');
    } else if(psyActive.classList.contains('buttonBackgroundActive'), psychicActive.classList.contains('activeButton')) {
        psyActive.classList.remove('buttonBackgroundActive');
        psychicActive.classList.remove('activeButton');
        shootActive.classList.add('buttonBackgroundActive');
        shootingActive.classList.add('activeButton');
    } else if(shootActive.classList.contains('buttonBackgroundActive'), shootingActive.classList.contains('activeButton')) {
        shootActive.classList.remove('buttonBackgroundActive');
        shootingActive.classList.remove('activeButton');
        chaActive.classList.add('buttonBackgroundActive');
        chargeActive.classList.add('activeButton');
    } else if(chaActive.classList.contains('buttonBackgroundActive'), chargeActive.classList.contains('activeButton')) {
        chaActive.classList.remove('buttonBackgroundActive');
        chargeActive.classList.remove('activeButton');
        fiActive.classList.add('buttonBackgroundActive');
        fightActive.classList.add('activeButton');
    } else if(fiActive.classList.contains('buttonBackgroundActive'), fightActive.classList.contains('activeButton')) {
        fiActive.classList.remove('buttonBackgroundActive');
        fightActive.classList.remove('activeButton');
        moActive.classList.add('buttonBackgroundActive');
        moraleActive.classList.add('activeButton');
    } else {
        init();
    }
}