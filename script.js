// --- CONFIGURATION ---
const correctPasscode = "1430"; // Set your passcode here
let currentInput = "";
let phoneNumber = "";

// --- CLOCK FUNCTION ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Update both Lock Screen and Home Screen clocks
    document.getElementById('lock-clock').innerText = `${hours}:${minutes}`;
    document.getElementById('small-clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock(); // Run immediately

// --- LOCK SCREEN LOGIC ---
function addPin(number) {
    if (currentInput.length < 4) {
        currentInput += number;
        updateDots();
        
        // Auto-check when 4 digits are entered
        if (currentInput.length === 4) {
            setTimeout(checkPin, 100);
        }
    }
}

function clearPin() {
    currentInput = "";
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.pin-dot');
    dots.forEach((dot, index) => {
        if (index < currentInput.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function checkPin() {
    if (currentInput === correctPasscode) {
        unlockPhone();
    } else {
        alert("Wrong Passcode! Try 1430");
        clearPin();
    }
}

function unlockPhone() {
    const lockScreen = document.getElementById('lock-screen');
    const homeScreen = document.getElementById('home-screen');
    
    // Add hidden class to lock screen (triggers CSS fade out)
    lockScreen.classList.add('hidden');
    
    // Remove hidden class from home screen (triggers CSS fade in)
    homeScreen.classList.remove('hidden');
}

// --- APP MANAGEMENT ---
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

// --- PHONE APP LOGIC ---
function addToPhone(num) {
    if (phoneNumber.length < 13) {
        phoneNumber += num;
        document.getElementById('phone-display').innerText = phoneNumber;
    }
}

function clearPhone() {
    phoneNumber = phoneNumber.slice(0, -1);
    document.getElementById('phone-display').innerText = phoneNumber;
}

function makeCall() {
    if (phoneNumber === "") {
        alert("Enter a number first!");
    } else if (phoneNumber === "143" || phoneNumber === "1430") {
        alert("Calling My Love Ayuuu... ❤️\n\nConnecting...");
    } else {
        alert(`Calling ${phoneNumber}...\n\n(Just kidding, I only call Ayuuu!)`);
    }
}
