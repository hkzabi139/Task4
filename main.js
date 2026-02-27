let state = {
    score: 100,
    lastInt: Date.now(),
    clickWindow: 0
};
const chartData = Array(20).fill(100);

const progressCircle = document.getElementById('progress-bar');
const scoreVal = document.getElementById('score-val');
const moodLabel = document.getElementById('mood-label');
const glow = document.getElementById('main-glow');

const ctx = document.getElementById('moodChart').getContext('2d');
const moodChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array(20).fill(''),
        datasets: [{
            label: 'Stability Score',
            data: chartData,
            borderColor: '#5433f9', // Initial Green for Deep Focus
            borderWidth: 3,
            pointRadius: 0,
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(34, 197, 94, 0.1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 100, grid: { color: '#334155' } }, x: { display: false } },
        plugins: { legend: { display: false } }
    }
});

function updateMood(change, reason) {
    state.score = Math.max(0, Math.min(100, state.score + change));
    if (change < 0) state.lastInt = Date.now();

    const offset = 440 - (state.score / 100) * 440;
    progressCircle.style.strokeDashoffset = offset;
    scoreVal.innerText = Math.round(state.score);

    let config = {};
    if (state.score >= 0 && state.score <= 20) {
        config = { label: "Overstimulated", color: "#ef4444", glow: "rgba(239, 68, 68, 0.2)" };
    }
    else if (state.score >= 21 && state.score <= 40) {
        config = { label: "Frustrated", color: "#f97316", glow: "rgba(249, 115, 22, 0.2)" };
    }
    else if (state.score >= 41 && state.score <= 60) {
        config = { label: "Neutral", color: "#eab308", glow: "rgba(234, 179, 8, 0.2)" };
    }
    else if (state.score >= 61 && state.score <= 80) {
        config = { label: "Calm", color: "#22c55e", glow: "rgba(6, 182, 212, 0.2)" };
    }
    else if (state.score >= 81 && state.score <= 100) {
        config = { label: "Deep Focus", color: "#06b6d4", glow: "rgba(34, 197, 94, 0.2)" };
    }

    moodLabel.innerText = config.label;
    moodLabel.style.borderColor = config.color;
    moodLabel.style.color = config.color;
    progressCircle.style.stroke = config.color;
    glow.style.background = config.glow;

    if (reason !== "Auto Recovery") addLog(reason, change);

    chartData.shift();
    chartData.push(state.score);
    moodChart.data.datasets[0].borderColor = config.color;
    moodChart.update('none');
}

function addLog(msg, val) {
    const logBox = document.getElementById('event-log');
    const item = document.createElement('div');
    item.className = 'log-item';
    item.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong>: ${msg} (${val > 0 ? '+' : ''}${val})`;
    logBox.prepend(item);
    if (logBox.children.length > 10) logBox.removeChild(logBox.lastChild);
}

setInterval(() => {
    let timeSinceLastAction = Date.now() - state.lastInt;
    if (timeSinceLastAction > 2000 && state.score < 100) {
        updateMood(2, "Auto Recovery");
    }
}, 500);

window.addEventListener('mousedown', () => {
    state.clickWindow++;
    setTimeout(() => state.clickWindow--, 5000);
    if (state.clickWindow > 10) updateMood(-15, "Rapid Clicks");
});

window.addEventListener('mousemove', (e) => {
    const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
    if (speed > 100) updateMood(-3, "Fast Mouse Move");
});

window.addEventListener('keydown', (e) => {
    if (e.repeat) updateMood(-5, "Key Stress");
    else updateMood(-1, "Typing Action");
});

function resetSim() { location.reload(); }

updateMood(0, "System Initialized at Max Stability");