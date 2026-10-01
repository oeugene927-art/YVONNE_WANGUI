// Tab Navigation
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    const activeButton = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(tabName)
    );
    if (activeButton) activeButton.classList.add('active');
}

// Sweet Words Array
const sweetWords = [
    "Bestie Forever 💕",
    "You're Awesome 🌟",
    "Sister for Life 👭",
    "Unforgettable Memories ✨",
    "You Light Up My Life 💡",
    "Truly Blessed 🙏",
    "Endless Laughs 😂",
    "Support & Cheer 🎉",
    "Pure Magic 💖"
];

// Color Palette (Pink & Luminous Green focused)
const colors = ["#ff007f", "#39ff14", "#d6006e", "#00ffcc", "#ff75c3", "#76ff03"];

// Magic Trigger Function on Button Click
function triggerMagic(event) {
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    
    // Origin point from center of button
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    // Spawn Flying Sweet Words
    for (let i = 0; i < 12; i++) {
        createWord(startX, startY);
    }

    // Spawn Flying Ribbons
    for (let j = 0; j < 16; j++) {
        createRibbon(startX, startY);
    }
}

function createWord(x, y) {
    const el = document.createElement('div');
    el.className = 'flying-word';
    
    // Pick random message & color
    el.textContent = sweetWords[Math.floor(Math.random() * sweetWords.length)];
    const bg = colors[Math.floor(Math.random() * colors.length)];
    el.style.backgroundColor = bg;

    // Border glow for neon effect
    if (bg === "#39ff14" || bg === "#00ffcc") {
        el.style.color = "#000";
    }

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    // Random trajectory directions
    const dx = (Math.random() - 0.5) * 500;
    const dy = -Math.random() * 450 - 100;
    const rot = (Math.random() - 0.5) * 60;

    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--dy', `${dy}px`);
    el.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 2500);
}

function createRibbon(x, y) {
    const ribbon = document.createElement('div');
    ribbon.className = 'flying-ribbon';

    const color = colors[Math.floor(Math.random() * colors.length)];
    ribbon.style.backgroundColor = color;
    ribbon.style.boxShadow = `0 0 10px ${color}`;

    ribbon.style.left = `${x}px`;
    ribbon.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 600;
    const dy = (Math.random() - 0.5) * 500 - 100;
    const rot = (Math.random() - 0.5) * 360;

    ribbon.style.setProperty('--dx', `${dx}px`);
    ribbon.style.setProperty('--dy', `${dy}px`);
    ribbon.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(ribbon);

    setTimeout(() => ribbon.remove(), 2800);
}