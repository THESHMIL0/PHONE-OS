let currentPin = "";
const correctPin = "1430"; // <--- CHANGE PASSWORD HERE

// Update Clocks
function updateClocks() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Update both Lock Screen and Home Screen clocks
    document.getElementById('lock-clock').innerText = `${hours}:${minutes}`;
    document.getElementById('small-clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClocks, 1000);
updateClocks();

// Keypad Logic
function addPin(num) {
    if (currentPin.length < 4) {
        currentPin += num;
        updateDots();
        
        // Check if full
        if (currentPin.length === 4) {
            checkPin();
        }
    }
}

function clearPin() {
    currentPin = "";
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.pin-dot');
    dots.forEach((dot, index) => {
        if (index < currentPin.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function checkPin() {
    if (currentPin === correctPin) {
        // Unlock Success
        setTimeout(() => {
            document.getElementById('lock-screen').classList.add('hidden');
            document.getElementById('home-screen').classList.remove('hidden');
        }, 300); // Small delay for effect
    } else {
        // Wrong PIN - shake animation or reset
        alert("Wrong Passcode! Try 1430"); // Simple alert for now
        clearPin();
    }
}

// App Open Logic (Placeholder)
function openApp(appName) {
    alert("Opening " + appName + "...");
}
