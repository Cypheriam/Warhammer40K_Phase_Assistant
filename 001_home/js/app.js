const commActive = document.getElementById('comm');
const commandActive = document.getElementById('command');

function init() {
    commandActive.classList.remove('activeButton');
    commandActive.classList.add('activeButton');
    commActive.classList.remove('buttonBackground');
    commActive.classList.add('buttonBackgroundActive');
}

init();