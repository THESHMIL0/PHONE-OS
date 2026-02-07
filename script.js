// --- CONFIGURATION ---
const correctPasscode = "1430"; // Password
let currentInput = "";

// --- CLOCK FUNCTION ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Lock Screen Clock
    document.getElementById('lock-clock').innerText = `${hours}:${minutes}`;
    // Home Screen Status Bar Clock
    document.getElementById('small-clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock(); // Run immediately

// --- KEYPAD LOGIC ---
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

// --- APP LOGIC ---
function openApp(appName) {
    alert("Opening " + appName + "...");
}
