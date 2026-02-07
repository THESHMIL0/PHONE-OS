const correctPasscode = "1430"; 
let currentInput = "";

// CLOCK
setInterval(() => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('lock-clock').innerText = time;
}, 1000);

// LOCK SCREEN
function addPin(num) {
    if (currentInput.length < 4) {
        currentInput += num;
        updateDots();
        if (currentInput.length === 4) setTimeout(checkPin, 100);
    }
}
function clearPin() { currentInput = ""; updateDots(); }
function updateDots() {
    document.querySelectorAll('.pin-dot').forEach((dot, i) => dot.classList.toggle('filled', i < currentInput.length));
}
function checkPin() {
    if (currentInput === correctPasscode) {
        document.getElementById('lock-screen').classList.add('hidden');
        document.getElementById('home-screen').classList.remove('hidden');
    } else {
        alert("Wrong Date! Try 1430 😸"); clearPin();
    }
}

// APPS
function openApp(id) { document.getElementById(`app-${id}`).classList.remove('hidden'); }
function closeApp(id) { document.getElementById(`app-${id}`).classList.add('hidden'); }

// COUPONS
function useCoupon(el) {
    if(!el.classList.contains('used')) {
        if(confirm("Use this coupon?")) {
            el.style.opacity = "0.5";
            el.querySelector('h3').innerText += " (Used)";
            el.classList.add('used');
        }
    }
}

function makeCall() { alert("Calling Ayuuu... ❤️"); }
