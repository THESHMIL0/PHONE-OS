// CONFIG
const correctPasscode = "1430"; 
// SET YOUR DATE HERE (YYYY-MM-DD)
const startDate = new Date("2025-08-18"); 
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

// PHONE CALL
function makeCall() { alert("Calling Ayuuu... ❤️"); }

// LOVE TIMER
function updateLoveTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counter = document.getElementById("love-counter");
    if(counter) {
        counter.innerText = days + " Days";
        document.getElementById("love-hours").innerText = hours;
        document.getElementById("love-minutes").innerText = minutes;
        document.getElementById("love-seconds").innerText = seconds;
    }
}
setInterval(updateLoveTimer, 1000);
updateLoveTimer();
