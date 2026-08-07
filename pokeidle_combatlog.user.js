// ==UserScript==
// @name         PokeIdle Combat Log 1.8
// @namespace    http://tampermonkey.net/
// @version      1.8
// @author       Phoslead
// @description  Combat Log con opciones de copiar al portapapeles y descarga de JSON
// @match        https://poke.idleworld.online/play
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Phoslead/pokeidle_combatlog/main/pokeidle_combatlog.user.js
// @downloadURL  https://raw.githubusercontent.com/Phoslead/pokeidle_combatlog/main/pokeidle_combatlog.user.js
// ==/UserScript==

(function () {
    'use strict';

    // BASE DE DATOS COMPLETA EXTRAÍDA DE LA POKÉDEX
    const POKEDEX = {
        1: "Bulbasaur", 2: "Ivysaur", 3: "Venusaur", 4: "Charmander", 5: "Charmeleon",
        6: "Charizard", 7: "Squirtle", 8: "Wartortle", 9: "Blastoise", 10: "Caterpie",
        11: "Metapod", 12: "Butterfree", 13: "Weedle", 14: "Kakuna", 15: "Beedrill",
        16: "Pidgey", 17: "Pidgeotto", 18: "Pidgeot", 19: "Rattata", 20: "Raticate",
        21: "Spearow", 22: "Fearow", 23: "Ekans", 24: "Arbok", 25: "Pikachu",
        26: "Raichu", 27: "Sandshrew", 28: "Sandslash", 29: "Nidoran Female", 30: "Nidorina",
        31: "Nidoqueen", 32: "Nidoran Male", 33: "Nidorino", 34: "Nidoking", 35: "Clefairy",
        36: "Clefable", 37: "Vulpix", 38: "Ninetales", 39: "Jigglypuff", 40: "Wigglytuff",
        41: "Zubat", 42: "Golbat", 43: "Oddish", 44: "Gloom", 45: "Vileplume",
        46: "Paras", 47: "Parasect", 48: "Venonat", 49: "Venomoth", 50: "Diglett",
        51: "Dugtrio", 52: "Meowth", 53: "Persian", 54: "Psyduck", 55: "Golduck",
        56: "Mankey", 57: "Primeape", 58: "Growlithe", 59: "Arcanine", 60: "Poliwag",
        61: "Poliwhirl", 62: "Poliwrath", 63: "Abra", 64: "Kadabra", 65: "Alakazam",
        66: "Machop", 67: "Machoke", 68: "Machamp", 69: "Bellsprout", 70: "Weepinbell",
        71: "Victreebel", 72: "Tentacool", 73: "Tentacruel", 74: "Geodude", 75: "Graveler",
        76: "Golem", 77: "Ponyta", 78: "Rapidash", 79: "Slowpoke", 80: "Slowbro",
        81: "Magnemite", 82: "Magneton", 83: "Farfetchd", 84: "Doduo", 85: "Dodrio",
        86: "Seel", 87: "Dewgong", 88: "Grimer", 89: "Muk", 90: "Shellder",
        91: "Cloyster", 92: "Gastly", 93: "Haunter", 94: "Gengar", 95: "Onix",
        96: "Drowzee", 97: "Hypno", 98: "Krabby", 99: "Kingler", 100: "Voltorb",
        101: "Electrode", 102: "Exeggcute", 103: "Exeggutor", 104: "Cubone", 105: "Marowak",
        106: "Hitmonlee", 107: "Hitmonchan", 108: "Lickitung", 109: "Koffing", 110: "Weezing",
        111: "Rhyhorn", 112: "Rhydon", 113: "Chansey", 114: "Tangela", 115: "Kangaskhan",
        116: "Horsea", 117: "Seadra", 118: "Goldeen", 119: "Seaking", 120: "Staryu",
        121: "Starmie", 122: "Mr. Mime", 123: "Scyther", 124: "Jynx", 125: "Electabuzz",
        126: "Magmar", 127: "Pinsir", 128: "Tauros", 129: "Magikarp", 130: "Gyarados",
        131: "Lapras", 132: "Ditto", 133: "Eevee", 134: "Vaporeon", 135: "Jolteon",
        136: "Flareon", 137: "Porygon", 138: "Omanyte", 139: "Omastar", 140: "Kabuto",
        141: "Kabutops", 142: "Aerodactyl", 143: "Snorlax", 144: "Articuno", 145: "Zapdos",
        146: "Moltres", 147: "Dratini", 148: "Dragonair", 149: "Dragonite", 150: "Mewtwo",
        151: "Mew", 152: "Chikorita", 153: "Bayleef", 154: "Meganium", 155: "Cyndaquil",
        156: "Quilava", 157: "Typhlosion", 158: "Totodile", 159: "Croconaw", 160: "Feraligatr",
        161: "Sentret", 162: "Furret", 163: "Hoothoot", 164: "Noctowl", 165: "Ledyba",
        166: "Ledian", 167: "Spinarak", 168: "Ariados", 169: "Crobat", 170: "Chinchou",
        171: "Lanturn", 172: "Pichu", 173: "Cleffa", 174: "Igglybuff", 175: "Togepi",
        176: "Togetic", 177: "Natu", 178: "Xatu", 179: "Mareep", 180: "Flaaffy",
        181: "Ampharos", 182: "Bellossom", 183: "Marill", 184: "Azumarill", 185: "Sudowoodo",
        186: "Politoed", 187: "Hoppip", 188: "Skiploom", 189: "Jumpluff", 190: "Aipom",
        191: "Sunkern", 192: "Sunflora", 193: "Yanma", 194: "Wooper", 195: "Quagsire",
        196: "Espeon", 197: "Umbreon", 198: "Murkrow", 199: "Slowking", 200: "Misdreavus",
        201: "Unown", 202: "Wobbuffet", 203: "Girafarig", 204: "Pineco", 205: "Forretress",
        206: "Dunsparce", 207: "Gligar", 208: "Steelix", 209: "Snubbull", 210: "Granbull",
        211: "Qwilfish", 212: "Scizor", 213: "Shuckle", 214: "Heracross", 215: "Sneasel",
        216: "Teddiursa", 217: "Ursaring", 218: "Slugma", 219: "Magcargo", 220: "Swinub",
        221: "Piloswine", 222: "Corsola", 223: "Remoraid", 224: "Octillery", 225: "Delibird",
        226: "Mantine", 227: "Skarmory", 228: "Houndour", 229: "Houndoom", 230: "Kingdra",
        231: "Phanpy", 232: "Donphan", 233: "Porygon2", 234: "Stantler", 235: "Smeargle",
        236: "Tyrogue", 237: "Hitmontop", 238: "Smoochum", 239: "Elekid", 240: "Magby",
        241: "Miltank", 242: "Blissey", 243: "Raikou", 244: "Entei", 245: "Suicune",
        246: "Larvitar", 247: "Pupitar", 248: "Tyranitar", 249: "Lugia", 250: "Ho-oh",
        251: "Celebi", 252: "Treecko", 253: "Grovyle", 254: "Sceptile", 255: "Torchic",
        256: "Combusken", 257: "Blaziken", 258: "Mudkip", 259: "Marshtomp", 260: "Swampert",
        261: "Poochyena", 262: "Mightyena", 270: "Lotad", 271: "Lombre", 272: "Ludicolo",
        273: "Seedot", 274: "Nuzleaf", 275: "Shiftry", 276: "Taillow", 277: "Swellow",
        278: "Wingull", 279: "Pelipper", 280: "Ralts", 281: "Kirlia", 282: "Gardevoir",
        287: "Slakoth", 288: "Vigoroth", 293: "Whismur", 294: "Loudred", 295: "Exploud",
        296: "Makuhita", 302: "Sableye", 303: "Mawile", 304: "Aron", 305: "Lairon",
        306: "Aggron", 307: "Meditite", 308: "Medicham", 309: "Electrike", 310: "Manectric",
        322: "Numel", 323: "Camerupt", 324: "Torkoal", 325: "Spoink", 326: "Grumpig",
        328: "Trapinch", 329: "Vibrava", 330: "Flygon", 332: "Cacturne", 333: "Swablu",
        334: "Altaria", 335: "Zangoose", 336: "Seviper", 341: "Corphish", 342: "Crawdaunt",
        343: "Baltoy", 344: "Claydol", 354: "Banette", 355: "Duskull", 356: "Dusclops",
        357: "Tropius", 359: "Absol", 361: "Snorunt", 362: "Glalie", 363: "Spheal",
        364: "Sealeo", 365: "Walrein", 371: "Bagon", 372: "Shelgon", 374: "Beldum",
        375: "Metang", 447: "Riolu", 448: "Lucario"
    };

    function resolvePokemonName(id, speciesId) {
        if (speciesId && POKEDEX[speciesId]) {
            return POKEDEX[speciesId];
        }
        return pokemonNameMap[id] || `Pokémon #${speciesId || '?'}`;
    }

    const pokemonNameMap = {};
    const pokemonDetailsMap = {};

    let activePokeId = 'default';
    let playerTeamIds = [];
    let debugPackets = [];

    const pokeStats = {};
    let totalDealtAll = 0;
    let totalTakenAll = 0;

    let sessionStartTime = null;
    let timerInterval = null;
    let sessionStarted = false;
    let expandedPokeId = null;

    function getFormattedTimerTime() {
        if (!sessionStarted || !sessionStartTime) return "+00:00:00";
        const elapsedMs = Date.now() - sessionStartTime;
        const totalSeconds = Math.floor(elapsedMs / 1000);

        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');

        return `+${hrs}:${mins}:${secs}`;
    }

    function registerActiveCombatPoke(id, speciesId) {
        if (!id || id === 'default') return null;

        const details = pokemonDetailsMap[id] || {};
        const name = resolvePokemonName(id, speciesId || details.speciesId);

        if (!pokeStats[id]) {
            pokeStats[id] = {
                name: name,
                level: details.level || '?',
                quality: details.quality || 'Normal',
                stats: details.stats || null,
                dealt: 0,
                taken: 0,
                dealtHitsCount: 0,
                takenHitsCount: 0,
                history: []
            };
        } else {
            if (name && (pokeStats[id].name === 'Pokémon Activo' || pokeStats[id].name.startsWith('Pokémon #'))) {
                pokeStats[id].name = name;
            }
            if (details.level) pokeStats[id].level = details.level;
            if (details.quality) pokeStats[id].quality = details.quality;
            if (details.stats) pokeStats[id].stats = details.stats;
        }
        return pokeStats[id];
    }

    function startSessionTimer() {
        sessionStartTime = Date.now();
        sessionStarted = true;

        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            const timerEl = document.getElementById('cl-session-timer');
            if (!timerEl) return;

            const elapsedMs = Date.now() - sessionStartTime;
            const totalSeconds = Math.floor(elapsedMs / 1000);

            const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const secs = String(totalSeconds % 60).padStart(2, '0');

            timerEl.textContent = `${hrs}:${mins}:${secs}`;
        }, 1000);
    }

    function stopSessionTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
    }

    function resetSessionTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
        sessionStartTime = null;
        sessionStarted = false;

        const timerEl = document.getElementById('cl-session-timer');
        if (timerEl) {
            timerEl.textContent = '00:00:00';
        }
    }

    function resetAllCombatData(reason = 'Estadísticas reiniciadas.') {
        totalDealtAll = 0;
        totalTakenAll = 0;
        debugPackets = [];
        for (const key in pokeStats) {
            delete pokeStats[key];
        }
        resetSessionTimer();
        updateStatsUI();
        console.log(`[Combat Log] Reset ejecutado: ${reason}`);
    }

    function buildExportDataObject() {
        return {
            sessionDurationSeconds: sessionStartTime ? Math.floor((Date.now() - sessionStartTime) / 1000) : 0,
            exportedAt: new Date().toISOString(),
            summary: {
                totalDamageDealt: totalDealtAll,
                totalDamageTaken: totalTakenAll
            },
            pokemons: Object.keys(pokeStats).map(id => {
                const p = pokeStats[id];
                return {
                    id: id,
                    name: p.name,
                    level: p.level,
                    quality: p.quality,
                    stats: p.stats,
                    totalDealt: p.dealt,
                    totalTaken: p.taken,
                    dealtHitsCount: p.dealtHitsCount,
                    avgDealtPerHit: p.dealtHitsCount > 0 ? Math.round(p.dealt / p.dealtHitsCount) : 0,
                    history: p.history
                };
            })
        };
    }

    function createCombatLogUI() {
        if (document.getElementById('combat-log-hud')) return;

        const hud = document.createElement('div');
        hud.id = 'combat-log-hud';
        hud.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 440px;
            max-height: 500px;
            background: rgba(12, 12, 18, 0.95);
            border: 1px solid #444;
            border-radius: 8px;
            color: #fff;
            font-family: monospace;
            font-size: 11px;
            z-index: 999999;
            box-shadow: 0 6px 16px rgba(0,0,0,0.7);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            user-select: none;
        `;

        hud.innerHTML = `
            <div id="cl-header" style="background: #1a1a24; padding: 8px 10px; font-weight: bold; border-bottom: 1px solid #333; display: flex; justify-content: space-between; align-items: center; cursor: move;">
                <span>⚔️ COMBAT LOG</span>
                <div style="display: flex; gap: 4px; align-items: center;">
                    <button id="cl-copy-json" style="background: #2b5278; border: none; color: #fff; padding: 2px 6px; border-radius: 4px; cursor: pointer; font-family: monospace; font-size: 10px;" title="Copiar datos al portapapeles">
                        📋 Copiar
                    </button>
                    <button id="cl-export-json" style="background: #2b5278; border: none; color: #fff; padding: 2px 6px; border-radius: 4px; cursor: pointer; font-family: monospace; font-size: 10px;" title="Guardar como archivo .json">
                        💾 Guardar
                    </button>
                    <span id="cl-debug-btn" style="color: #f39c12; cursor: pointer; font-size: 10px; margin-left: 6px; font-weight: bold;" title="Descargar log de Websocket">[Debug]</span>
                    <span id="cl-reset-stats" style="cursor: pointer; opacity: 0.8; color: #ffca28; font-size: 10px; margin-left: 4px;">[Reset Stats]</span>
                </div>
            </div>

            <div id="combat-stats-panel" style="background: #121218; padding: 8px; max-height: 450px; overflow-y: auto; flex-grow: 1;">
                <div style="font-weight: bold; color: #64b5f6; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
                    <span>⏱️ <span id="cl-session-timer" style="color: #64b5f6;">00:00:00</span></span>
                    <span>⚔️ <span id="stat-total-dealt" style="color:#4caf50;">0</span> | 💥 <span id="stat-total-taken" style="color:#ff5252;">0</span></span>
                </div>
                <div id="stats-individual-list" style="display: flex; flex-direction: column; gap: 4px;">
                    <div style="color: #777; font-style: italic;">Esperando primer combate...</div>
                </div>
            </div>
        `;

        document.body.appendChild(hud);

        makeElementDraggable(hud, document.getElementById('cl-header'));

        document.getElementById('cl-reset-stats').addEventListener('click', () => {
            resetAllCombatData('Reset manual por usuario.');
        });

        document.getElementById('cl-debug-btn').addEventListener('click', () => {
            if (debugPackets.length === 0) {
                alert('No hay paquetes registrados en este combate.');
                return;
            }
            const text = debugPackets.map(p => `[${p.time}] ${p.data}`).join('\\n');
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `pokeidle_combatlog_debug_${Date.now()}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        });

        document.getElementById('cl-copy-json').addEventListener('click', () => {
            const exportData = buildExportDataObject();
            const jsonString = JSON.stringify(exportData, null, 2);

            navigator.clipboard.writeText(jsonString).then(() => {
                const btn = document.getElementById('cl-copy-json');
                btn.textContent = '✅ Copiado';
                btn.style.background = '#2e7d32';
                setTimeout(() => {
                    btn.textContent = '📋 Copiar';
                    btn.style.background = '#2b5278';
                }, 2000);
            }).catch(err => {
                alert('Error al copiar al portapapeles: ' + err);
            });
        });

        document.getElementById('cl-export-json').addEventListener('click', () => {
            const exportData = buildExportDataObject();
            const jsonString = JSON.stringify(exportData, null, 2);

            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const dateStr = new Date().toISOString().replace(/[:T]/g, '-').slice(0, 16);
            const fileName = `pokeidle_combat_${dateStr}.json`;

            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            const btn = document.getElementById('cl-export-json');
            btn.textContent = '💾 Guardado';
            btn.style.background = '#2e7d32';
            setTimeout(() => {
                btn.textContent = '💾 Guardar';
                btn.style.background = '#2b5278';
            }, 2000);
        });
    }

    function makeElementDraggable(elmnt, dragHandler) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        dragHandler.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            elmnt.style.bottom = 'auto';
            elmnt.style.right = 'auto';
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function updateStatsUI() {
        const totalDealtEl = document.getElementById('stat-total-dealt');
        const totalTakenEl = document.getElementById('stat-total-taken');
        const listEl = document.getElementById('stats-individual-list');

        if (!totalDealtEl || !listEl) return;

        totalDealtEl.textContent = totalDealtAll.toLocaleString();
        totalTakenEl.textContent = totalTakenAll.toLocaleString();

        const historyContainer = document.getElementById('expanded-history-container');
        let savedScrollTop = null;
        let isAtBottom = false;

        if (historyContainer) {
            savedScrollTop = historyContainer.scrollTop;
            isAtBottom = (historyContainer.scrollHeight - historyContainer.clientHeight - savedScrollTop) < 15;
        }

        let html = '';
        for (const id in pokeStats) {
            const poke = pokeStats[id];
            const isActive = id === activePokeId;
            const isExpanded = id === expandedPokeId;
            const activeBadge = isActive ? ' <span style="color:#64b5f6; font-size:9px;">(Activo)</span>' : '';
            const arrow = isExpanded ? '▼' : '▶';

            const avgDealt = poke.dealtHitsCount > 0 ? Math.round(poke.dealt / poke.dealtHitsCount) : 0;
            const levelInfo = poke.level !== '?' ? `<span style="color:#ffca28; font-size:10px;">Lv.${poke.level}</span>` : '';
            const qualityInfo = poke.quality && poke.quality !== 'Normal' ? `<span style="color:#ab47bc; font-size:9px;">[${poke.quality}]</span>` : '';

            html += `
                <div style="border: 1px solid ${isActive ? '#2b5278' : '#222'}; border-radius: 4px; overflow: hidden; background: ${isActive ? 'rgba(100,181,246,0.05)' : 'transparent'};">
                    <div class="poke-row-toggle" data-poke-id="${id}" style="display: flex; justify-content: space-between; padding: 4px 6px; cursor: pointer; align-items: center;">
                        <span style="color: ${isActive ? '#fff' : '#ccc'}; font-weight: ${isActive ? 'bold' : 'normal'}; display: flex; gap: 4px; align-items: center;">
                            <span style="color: #888; font-size: 9px;">${arrow}</span>
                            <span>${poke.name}</span>
                            ${levelInfo}
                            ${qualityInfo}
                            ${activeBadge}
                        </span>
                        <span style="display: flex; gap: 8px; align-items: center;">
                            <span style="color: #888; font-size: 9px;">avg: <b style="color:#81c784;">${avgDealt.toLocaleString()}</b></span>
                            <span>
                                <span style="color: #4caf50;">⚔️ ${poke.dealt.toLocaleString()}</span> |
                                <span style="color: #ff5252;">💥 ${poke.taken.toLocaleString()}</span>
                            </span>
                        </span>
                    </div>

                    ${isExpanded ? `
                        <div id="expanded-history-container" style="background: rgba(0,0,0,0.3); padding: 6px; border-top: 1px solid #333; max-height: 220px; overflow-y: auto; font-size: 10px; display: flex; flex-direction: column; gap: 3px; user-select: text;">
                            ${poke.stats ? `
                                <div style="color: #aaa; background: rgba(255,255,255,0.05); padding: 4px; border-radius: 3px; margin-bottom: 4px; display: flex; justify-content: space-around;">
                                    ${Object.entries(poke.stats).map(([k, v]) => `<span><b>${k.toUpperCase()}:</b> ${v}</span>`).join('')}
                                </div>
                            ` : ''}
                            ${poke.history.length === 0
                        ? '<div style="color: #666; font-style: italic;">Sin registro de daño aún.</div>'
                        : poke.history.slice(-100).map(h => {
                            if (h.type === 'level_up') {
                                return `
                                            <div style="color: #ffd700; font-weight: bold; line-height: 1.2; background: rgba(255, 215, 0, 0.1); padding: 2px 4px; border-radius: 2px;">
                                                <span style="color: #64b5f6;">[${h.timerTime}]</span> ⭐ ${poke.name} subió a nivel ${h.newLevel}.
                                            </div>
                                        `;
                            }
                            const isDealt = h.type === 'dealt';
                            const color = isDealt ? '#81c784' : '#e57373';
                            const icon = isDealt ? '⚔️' : '💥';
                            const actionText = isDealt ? `infligió` : `recibió`;
                            return `
                                        <div style="color: ${color}; line-height: 1.2;">
                                            <span style="color: #64b5f6;">[${h.timerTime}]</span> ${icon} ${actionText} <b>${h.amount.toLocaleString()}</b> dmg (${h.move})
                                        </div>
                                    `;
                        }).join('')
                    }
                        </div>
                    ` : ''}
                </div>
            `;
        }

        listEl.innerHTML = html || '<div style="color: #777;">Sin registro de Pokémon en combate</div>';

        const newHistoryContainer = document.getElementById('expanded-history-container');
        if (newHistoryContainer && savedScrollTop !== null) {
            if (isAtBottom) {
                newHistoryContainer.scrollTop = newHistoryContainer.scrollHeight;
            } else {
                newHistoryContainer.scrollTop = savedScrollTop;
            }
        }

        document.querySelectorAll('.poke-row-toggle').forEach(row => {
            row.addEventListener('click', (e) => {
                const targetId = e.currentTarget.getAttribute('data-poke-id');
                expandedPokeId = expandedPokeId === targetId ? null : targetId;
                updateStatsUI();
            });
        });
    }

    const OriginalWebSocket = window.WebSocket;

    window.WebSocket = new Proxy(OriginalWebSocket, {
        construct(target, args) {
            const ws = new target(...args);

            const originalSend = ws.send;
            ws.send = function (data) {
                try {
                    if (typeof data === 'string') {
                        const outPacket = JSON.parse(data);

                        if (outPacket.type === 'enter-hunt') {
                            resetAllCombatData(`Nueva cacería iniciada (${outPacket.slug || 'hunt'}).`);
                        }

                        if (outPacket.type === 'poke-summon' && outPacket.pokeId) {
                            activePokeId = outPacket.pokeId;
                            registerActiveCombatPoke(activePokeId);
                            updateStatsUI();
                        }
                    }
                } catch (e) { }
                return originalSend.apply(this, arguments);
            };

            ws.addEventListener('open', () => {
                setTimeout(createCombatLogUI, 1000);
            });

            ws.addEventListener('message', (event) => {
                if (typeof event.data === 'string') {
                    debugPackets.push({
                        time: new Date().toISOString(),
                        data: event.data
                    });
                }
                try {
                    if (typeof event.data !== 'string') return;
                    const packet = JSON.parse(event.data);

                    if (packet.type === 'enter-hunt') {
                        resetAllCombatData(`Confirmación de cacería (${packet.slug || 'hunt'}).`);
                    }

                    if (packet.type === 'leave-hunt') {
                        stopSessionTimer();
                    }

                    if (packet.type === 'pokes' && Array.isArray(packet.list)) {
                        playerTeamIds = [];
                        packet.list.forEach(poke => {
                            if (poke.id) {
                                playerTeamIds.push(poke.id);
                                const resolvedName = resolvePokemonName(poke.id, poke.speciesId) || poke.name;
                                pokemonNameMap[poke.id] = resolvedName;
                                pokemonDetailsMap[poke.id] = {
                                    speciesId: poke.speciesId,
                                    level: poke.level,
                                    quality: poke.quality,
                                    stats: poke.stats || null
                                };
                            }
                        });

                        if (activePokeId === 'default' && packet.list.length > 0) {
                            activePokeId = packet.list[0].id;
                        }
                    }

                    if (packet.type === 'poke-xp' && packet.id && packet.level) {
                        if (pokemonDetailsMap[packet.id]) {
                            pokemonDetailsMap[packet.id].level = packet.level;
                        }

                        const currentPoke = pokeStats[packet.id];
                        if (currentPoke) {
                            if (currentPoke.level !== '?' && packet.level > currentPoke.level) {
                                const timerTimeStr = getFormattedTimerTime();

                                currentPoke.history.push({
                                    timerTime: timerTimeStr,
                                    //timestamp: Date.now(),
                                    type: 'level_up',
                                    oldLevel: currentPoke.level,
                                    newLevel: packet.level
                                });

                                currentPoke.level = packet.level;
                                updateStatsUI();
                            } else {
                                currentPoke.level = packet.level;
                            }
                        }
                    }

                    if (packet.type === 'field' && ((packet.hits && packet.hits.length > 0) || packet.bossCinematic !== undefined)) {

                        if (!sessionStarted) {
                            startSessionTimer();
                        }

                        let newActiveId = activePokeId;
                        if (packet.bossActiveIdx !== undefined && typeof packet.bossActiveIdx === 'number') {
                            if (playerTeamIds.length > packet.bossActiveIdx) {
                                newActiveId = playerTeamIds[packet.bossActiveIdx];
                            }
                        } else if (packet.heroName) {
                            for (const id in pokemonNameMap) {
                                if (pokemonNameMap[id] === packet.heroName) {
                                    newActiveId = id;
                                    const details = pokemonDetailsMap[id];
                                    if (details && details.stats && details.stats.hp === packet.heroMaxHp) {
                                        break;
                                    }
                                }
                            }
                        }

                        if (activePokeId === 'default' && newActiveId !== 'default') {
                            activePokeId = newActiveId;
                        }

                        const currentPoke = registerActiveCombatPoke(activePokeId);
                        const timerTimeStr = getFormattedTimerTime();

                        if (currentPoke) {
                            (packet.hits || []).forEach(hit => {
                                if (hit.slot === -1) {
                                    currentPoke.taken += hit.amount;
                                    currentPoke.takenHitsCount++;
                                    totalTakenAll += hit.amount;

                                    currentPoke.history.push({
                                        timerTime: timerTimeStr,
                                        //timestamp: Date.now(),
                                        type: 'taken',
                                        move: hit.move,
                                        moveType: hit.type,
                                        amount: hit.amount
                                    });
                                } else {
                                    currentPoke.dealt += hit.amount;
                                    currentPoke.dealtHitsCount++;
                                    totalDealtAll += hit.amount;

                                    currentPoke.history.push({
                                        timerTime: timerTimeStr,
                                        //timestamp: Date.now(),
                                        type: 'dealt',
                                        move: hit.move,
                                        moveType: hit.type,
                                        amount: hit.amount,
                                        eff: hit.eff
                                    });
                                }
                            });

                            if (packet.bossCinematic) {
                                const cinematicDmg = Number(packet.bossCinematicDmg) || 0;
                                if (cinematicDmg > 0) {
                                    currentPoke.taken += cinematicDmg;
                                    currentPoke.takenHitsCount++;
                                    totalTakenAll += cinematicDmg;

                                    currentPoke.history.push({
                                        timerTime: timerTimeStr,
                                        //timestamp: Date.now(),
                                        type: 'taken',
                                        move: packet.bossCinematic,
                                        moveType: 'BOSS',
                                        amount: cinematicDmg
                                    });
                                }
                            }
                        }

                        if (newActiveId && newActiveId !== activePokeId) {
                            activePokeId = newActiveId;
                        }

                        updateStatsUI();
                    }

                } catch (err) {

                }
            });

            return ws;
        }
    });

    window.WebSocket.prototype = OriginalWebSocket.prototype;
})();