# Poke Idle - Combat Log

🌍 Languages: [English](README.md) | [Português](README_BR.md) | [Español](README_ES.md)

Un userscript avanzado de calidad de vida que añade un registro de combate (combat log), temporizador de sesión y funcionalidades de exportación a Poke Idle World.

---

## ⚡ Características

- **HUD de Registro de Combate:** Una ventana flotante arrastrable que rastrea tus estadísticas de combate.
- **Rastreo de Daño:** Registra el daño total infligido y recibido por cada Pokémon, incluyendo el daño promedio por golpe.
- **Historial Detallado:** Expande cualquier Pokémon en el registro para ver su nivel, calidad, estadísticas y un historial detallado de los últimos 100 golpes y eventos de subida de nivel.
- **Temporizador de Sesión:** Muestra cuánto tiempo ha durado tu sesión de combate actual.
- **Exportación de Datos:** Copia tus datos de combate al portapapeles o descárgalos como un archivo `.json` para un análisis más profundo.
- **Actualizaciones en Tiempo Real:** Escucha automáticamente el tráfico del juego para actualizar las estadísticas instantáneamente en cuanto ocurren acciones de combate.

---
## 📸 Vista Previa y Capturas de Pantalla
*(Capturas de pantalla por añadir)*

---

## 📖 Cómo Usar

1. **Entra en Combate:**
   - Simplemente juega con normalidad. El script escucha automáticamente el tráfico de red del juego y comenzará a registrar estadísticas tan pronto como tu Pokémon inflija o reciba daño.

2. **Interactúa con el Registro de Combate:**
   - Aparecerá un HUD flotante en la esquina inferior derecha de tu pantalla.
   - Puedes arrastrar el HUD por la pantalla haciendo clic y manteniendo presionado su encabezado.
   - Haz clic en cualquier Pokémon de la lista para expandir y ver su historial de golpes detallado.

3. **Gestionar Datos:**
   - **Copiar:** Haz clic en "📋 Copiar" para copiar los datos de la sesión como JSON a tu portapapeles.
   - **Guardar:** Haz clic en "💾 Guardar" para descargar los datos de la sesión como un archivo `.json`.
   - **Resetear:** Haz clic en "[Reset Stats]" para borrar los datos de la sesión actual y reiniciar el temporizador.

---
## 🌐 Compatibilidad de Navegador

Este userscript es compatible con cualquier navegador de escritorio moderno que ejecute una extensión de gestor de scripts:

| Navegador | Extensión de Gestor Recomendada |
| :--- | :--- |
| **Google Chrome / Brave / Edge** | [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/) |
| **Mozilla Firefox** | [Tampermonkey](https://www.tampermonkey.net/) o [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) |
| **Opera / Opera GX** | [Tampermonkey](https://www.tampermonkey.net/) |
| **Safari** | [Tampermonkey](https://www.tampermonkey.net/) |

---

## 📦 Instalación

### Opción 1: Instalación Automática (Recomendado)

1. Asegúrate de tener una extensión de gestor de scripts (como **[Tampermonkey](https://www.tampermonkey.net/)**) instalada en tu navegador.
2. Haz clic en el siguiente enlace para instalar el script automáticamente:

👉 **[INSTALAR USERSCRIPT DIRECTAMENTE](https://raw.githubusercontent.com/Phoslead/pokeidle_combatlog/main/pokeidle_combatlog.user.js)** 👈

3. Tampermonkey mostrará una pestaña de instalación. Haz clic en **"Instalar"**.
4. ¡Abre o refresca la pestaña del juego!

---

### Opción 2: Instalación Manual

Si el enlace automático no activa tu gestor de scripts, sigue estos pasos:

1. Abre el panel de extensiones de tu navegador para **Tampermonkey** y haz clic en **"Crear un nuevo script..."**.
2. Abre el archivo de script de este repositorio: [`pokeidle_combatlog.user.js`](https://github.com/Phoslead/pokeidle_combatlog/blob/main/pokeidle_combatlog.user.js).
3. Copia todo el código JavaScript.
4. Pega el código dentro del editor de scripts de Tampermonkey, reemplazando cualquier texto de plantilla predeterminado.
5. Guarda el script (**Ctrl + S** o `Archivo -> Guardar`).
6. Refresca la pestaña del juego.


