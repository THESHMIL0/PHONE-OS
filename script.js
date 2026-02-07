// 1. Live Clock Function
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately on load

// 2. Open App Function
function openApp(appName) {
    const appWindow = document.getElementById('app-window');
    const appTitle = document.getElementById('app-title');
    const appContent = document.getElementById('app-content');

    // Set the title
    appTitle.innerText = appName;

    // Set content based on which app was clicked
    if (appName === 'Messages') {
        appContent.innerHTML = '<p>No new messages yet...</p>';
    } else if (appName === 'Photos') {
        appContent.innerHTML = '<p>📸 Photo Gallery coming soon!</p>';
    } else if (appName === 'Settings') {
        appContent.innerHTML = '<p>Brightness: 100%</p><p>WiFi: Connected</p>';
    }

    // Show the window (slide up)
    appWindow.classList.remove('hidden');
}

// 3. Close App Function (Home Button)
function closeApp() {
    const appWindow = document.getElementById('app-window');
    appWindow.classList.add('hidden');
}
