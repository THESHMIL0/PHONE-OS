const correctPasscode = "1430"; 
let currentInput = "";

// CLOCK
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('lock-clock').innerText = `${hours}:${minutes}`;
    document.getElementById('small-clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// KEYPAD
function addPin(num) {
    if (currentInput.length < 4) {
        currentInput += num;
        updateDots();
        if (currentInput.length === 4) setTimeout(checkPin, 100);
    }
}
function clearPin() { currentInput = ""; updateDots(); }
function updateDots() {
    document.querySelectorAll('.pin-dot').forEach((dot, i) => {
        dot.classList.toggle('filled', i < currentInput.length);
    });
}
function checkPin() {
    if (currentInput === correctPasscode) {
        document.getElementById('lock-screen').classList.add('hidden');
        document.getElementById('home-screen').classList.remove('hidden');
    } else {
        alert("Wrong Passcode! Try 1430"); clearPin();
    }
}

// OPENING & CLOSING APPS
function openApp(appName) {
    const appElement = document.getElementById(`app-${appName}`);
    if (appElement) {
        appElement.classList.remove('hidden');
    } else {
        alert("App under construction!");
    }
}

function closeApp(appName) {
    const appElement = document.getElementById(`app-${appName}`);
    if (appElement) {
        appElement.classList.add('hidden');
    }
}
