// script.js
const CORRECT_PASS = "1234"; // You can change this!

function checkPass() {
    const input = document.getElementById('pass-input').value;
    const lockScreen = document.getElementById('lock-screen');
    const homeScreen = document.getElementById('home-screen');

    if (input === CORRECT_PASS) {
        lockScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
    } else {
        alert("Wrong passcode! Try again. 😸");
        document.getElementById('pass-input').value = "";
    }
}

function launchGame(gameName) {
    alert("Launching " + gameName + "! (We will build the game logic next)");
}
