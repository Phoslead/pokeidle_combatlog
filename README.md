# Poke Idle - Combat Log

🌍 Languages: [English](README.md) | [Português](README_BR.md) | [Español](README_ES.md)

An advanced quality-of-life userscript that adds a combat log, session timer, and export functionalities to Poke Idle World.

---

## ⚡ Features

- **Combat Log HUD:** A draggable floating window tracking your combat stats.
- **Damage Tracking:** Tracks total damage dealt and taken per Pokémon, including average damage per hit.
- **Detailed History:** Expand any Pokémon in the log to see its level, quality, stats, and a detailed history of the last 100 hits and level-up events.
- **Session Timer:** Tracks how long your current combat session has lasted.
- **Data Export:** Copy your combat data to the clipboard or download it as a `.json` file for further analysis.
- **Real-Time Updates:** Automatically listens to game traffic to update stats instantly as soon as combat actions occur.

---
## 📸 Preview & Screenshots
<img width="926" height="722" alt="image" src="https://github.com/user-attachments/assets/4c50d08c-4f96-45e2-884b-62b5055c101e" />
<img width="1007" height="652" alt="overview" src="https://github.com/user-attachments/assets/8b12d444-199f-43f7-9a43-3df955fcd433" />
<img width="1213" height="808" alt="boss_battle_04" src="https://github.com/user-attachments/assets/9ace061b-a7e4-4d89-a102-fa1efa36cc81" />
<img width="510" height="882" alt="image" src="https://github.com/user-attachments/assets/d6e76a69-4ada-4ec6-8416-ed72c12b1305" />






---

## 📖 How to Use

1. **Engage in Combat:**
   - Simply play the game as normal. The script automatically listens to the game's network traffic and will start logging stats as soon as your Pokémon deal or receive damage.

2. **Interact with the Combat Log:**
   - A floating HUD will appear at the bottom right corner of your screen.
   - You can drag the HUD around the screen by clicking and holding its header.
   - Click on any Pokémon in the list to expand and view its detailed hit history.

3. **Manage Data:**
   - **Copy:** Click "📋 Copiar" to copy the session data as JSON to your clipboard.
   - **Save:** Click "💾 Guardar" to download the session data as a `.json` file.
   - **Reset:** Click "[Reset Stats]" to clear current session data and restart the timer.

---
## 🌐 Browser Compatibility

This userscript is compatible with any modern desktop browser running a script manager extension:

| Browser | Recommended Manager Extension |
| :--- | :--- |
| **Google Chrome / Brave / Edge** | [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) |
| **Mozilla Firefox** | [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) |
| **Opera / Opera GX** | [Tampermonkey](https://www.tampermonkey.net/) |
| **Safari** | [Tampermonkey](https://www.tampermonkey.net/) |

---

## 📦 Installation

### Option 1: Automatic Installation (Recommended)

1. Make sure you have a script manager extension (such as **[Tampermonkey](https://www.tampermonkey.net/)**) installed in your browser.
2. Click the link below to install the script automatically:

👉 **[INSTALL USERSCRIPT DIRECTLY](https://raw.githubusercontent.com/Phoslead/pokeidle_combatlog/main/pokeidle_combatlog.user.js)** 👈

3. Tampermonkey will prompt an installation tab. Click **"Install"**.
4. Open or refresh the game tab!

---

### Option 2: Manual Installation

If the automatic link does not trigger your script manager, follow these steps:

1. Open your browser's extension panel for **Tampermonkey** and click **"Create a new script..."**.
2. Open the script file from this repository: [`pokeidle_combatlog.user.js`](https://github.com/Phoslead/pokeidle_combatlog/blob/main/pokeidle_combatlog.user.js).
3. Copy the entire JavaScript code.
4. Paste the code inside the Tampermonkey script editor, replacing any default template text.
5. Save the script (**Ctrl + S** or `File -> Save`).
6. Refresh the game tab.
