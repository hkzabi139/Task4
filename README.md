# 🧠 MoodFlow AI | Smart Emotional State Simulator

## 🌐 Live Demo
You can test the live simulation here: **[https://hkzabi139.github.io/Task-4/](https://hkzabi139.github.io/Task4/)**

---
## 🚀 Key Features

* **Behavioral Tracking Engine**: Monitors mouse acceleration, click frequency, and typing patterns.
* **Dynamic Stability Score**: A real-time score (0-100) calculated using a custom logic object.
* **Mood-Adaptive UI**: The entire dashboard's "glow" and color palette change dynamically based on the current emotional state.
* **Live Analytics Graph**: Integrated with **Chart.js** for real-time data visualization of mood stability.
* **Event Log System**: Tracks the last 10 interactions with precise timestamps and score impact.
* **Session Export**: Allows users to download their session activity as a **JSON** file for data analysis.

---

## 📊 Mood Levels & Logic

| Score Range | Emotional State | UI Color | Description |
| :--- | :--- | :--- | :--- |
| 81 - 100 | **Deep Focus** | Green | Stable and productive interaction. |
| 61 - 80 | **Calm** | Blue | Smooth and controlled movements. |
| 41 - 60 | **Neutral** | Yellow | Initial baseline state. |
| 21 - 40 | **Frustrated** | Orange | Sudden UI bursts or rapid clicks detected. |
| 0 - 20 | **Overstimulated** | Red | Aggressive mouse movement or high-pressure typing. |

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, Modern CSS (Glassmorphism & Flexbox/Grid)
* **Scripting**: Vanilla JavaScript (ES6+)
* **Charts**: Chart.js Library via CDN

---

## ⚙️ How to Run

1.  Clone this repository to your local machine.
2.  Ensure you have an active internet connection (to load Chart.js).
3.  Open `index.html` in any modern browser (Chrome, Edge, or Firefox).
4.  **Interact**: Move your mouse fast, click rapidly, or hold keys to see the AI react to your behavior.

---

## 📁 Project Structure

- `index.html`: Core structure and UI components.
- `style.css`: Glassmorphic styling and dynamic glow transitions.
- `script.js`: Behavioral tracking logic, scoring system, and graph updates.
- `README.md`: Documentation (This file).

---

Developed for **Task #4: Speed Programming Challenge**.
