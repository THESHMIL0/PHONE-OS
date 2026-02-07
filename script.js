// --- CONFIGURATION ---
const correctPasscode = "1430"; // Your Date
let currentInput = "";
let phoneNumber = "";

// --- CLOCK & NOTIFICATIONS ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('lock-clock').innerText = `${hours}:${minutes}`;
    document.getElementById('small-clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Random Notifications Logic
const notifs = [
    { app: "Messages", title: "Theshmil ❤️", text: "Did you eat yet? 🍕" },
    { app: "Calendar", title: "Reminder", text: "I love you 3000! 💍" },
    { app: "Photos", title: "New Memory", text: "You looked cute today!" },
    { app: "Map", title: "Location", text: "Theshu is missing you..." },
    { app: "Wallet", title: "Coupon", text: "Hugs available to redeem!" }
];

function triggerNotification() {
    const container = document.getElementById('notification-area');
    const randomNotif = notifs[Math.floor(Math.random() * notifs.length)];
    
    // Create Bubble
    const bubble = document.createElement('div');
    bubble.className = 'notif-bubble';
    bubble.innerHTML = `
        <div class="notif-icon"><i class="fas fa-heart"></i></div>
        <div class="notif-text">
            <h4>${randomNotif.title}</h4>
            <p>${randomNotif.text}</p>
        </div>
    `;
    
    // Add click to open (optional)
    bubble.onclick = function() {
        this.style.opacity = '0';
        setTimeout(() => this.remove(), 300);
    };

    container.appendChild(bubble);

    // Remove automatically after 5 seconds
    setTimeout(() => {
        bubble.style.opacity = '0';
        setTimeout(() => bubble.remove(), 500);
    }, 5000);
}

// Start notifications after 5 seconds, then every 20 seconds
setTimeout(() => {
    triggerNotification();
    setInterval(triggerNotification, 20000); 
}, 5000);


// --- LOCK SCREEN LOGIC ---
function addPin(number) {
    if (currentInput.length < 4) {
        currentInput += number;
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
        alert("Wrong Passcode! Try 1430"); clearPin();
    }
}

// --- APP MANAGEMENT ---
function openApp(appName) {
    const app = document.getElementById(`app-${appName}`);
    if (app) app.classList.remove('hidden');
    else alert("Coming Soon!");
}
function closeApp(appName) {
    document.getElementById(`app-${appName}`).classList.add('hidden');
}

// --- PHONE APP ---
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
    if (phoneNumber === "1430" || phoneNumber === "143") {
        alert("Calling My Love Ayuuu... ❤️\n\nConnecting...");
    } else {
        alert("Calling...");
    }
}

// --- CAMERA APP ---
function takePhoto() {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = 0; flash.style.left = 0;
    flash.style.width = '100%'; flash.style.height = '100%';
    flash.style.background = 'white'; flash.style.zIndex = 100;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 100);
    alert("Photo saved to Gallery! 📸");
}

// --- WALLET APP ---
function useCoupon(element) {
    if (!element.classList.contains('used')) {
        const confirmUse = confirm("Do you want to use this coupon?");
        if (confirmUse) {
            element.style.opacity = "0.5";
            element.querySelector('h3').innerText += " (REDEEMED)";
            element.classList.add('used');
            alert("Coupon Redeemed! Screen shot this and send it to Theshu! 🎟️");
        }
    } else {
        alert("This coupon is already used! 😝");
    }
}
