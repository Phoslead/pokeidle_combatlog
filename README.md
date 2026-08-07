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
*(Screenshots to be added)*

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

> **Note:** Este script se actualiza automáticamente gracias a este código en la cabecera:
> `// @updateURL`
> `// @downloadURL`
> 
> Para desactivar las actualizaciones automáticas, solo borra esas 2 líneas del script instalado en tu Tampermonkey.

---

### Option 2: Manual Installation

If the automatic link does not trigger your script manager, follow these steps:

1. Open your browser's extension panel for **Tampermonkey** and click **"Create a new script..."**.
2. Open the script file from this repository: [`pokeidle_combatlog.user.js`](https://github.com/Phoslead/pokeidle_combatlog/blob/main/pokeidle_combatlog.user.js).
3. Copy the entire JavaScript code.
4. Paste the code inside the Tampermonkey script editor, replacing any default template text.
5. Save the script (**Ctrl + S** or `File -> Save`).
6. Refresh the game tab.
