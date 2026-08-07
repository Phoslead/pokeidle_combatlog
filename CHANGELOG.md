# Changelog

All notable changes to this project will be documented in this file.

## [1.10] - 2026-08-07
### Changed
- Los botones de acción (Copiar, Guardar, Reset) ahora se ocultan al minimizar el Combat Log.
- La ventana principal del Combat Log ahora reduce su ancho al estar minimizada para ahorrar espacio en pantalla.
- Se ha eliminado el mensaje de confirmación al resetear las estadísticas (ya no pausa el juego).

## [1.9] - 2026-08-07
### Added
- Added a minimize button (`➖`) to the Combat Log HUD to allow hiding the stats panel while not in combat or while in the city.

### Changed
- The `[Debug]` button and its associated logic have been commented out to keep the UI clean, but can be easily re-enabled for troubleshooting purposes.

## [1.8] - 2026-08-06
### Added
- Added `@updateURL` and `@downloadURL` tags to the script header to allow Tampermonkey to automatically pull updates from the GitHub repository.

### Fixed
- The combat timer will now correctly pause (without resetting to 0) when the player leaves a hunt. This was previously failing because `leave-hunt` is an outgoing packet, not an incoming one.

## [1.6] - 2026-08-06
### Added
- The combat timer will now correctly pause (without resetting to 0) when the `leave-hunt` message is received, allowing players to see the exact duration of their hunt after it ends.

## [1.5] - 2026-08-06
### Fixed
- Fixed an issue where the final attack dealt by a dying Pokémon and the fatal damage it received were incorrectly attributed to the next Pokémon that entered the field.
- Added a `[Debug]` button to export raw websocket logs for easier troubleshooting.

## [1.1] - 2026-08-06
### Fixed
- Fixed an issue in boss fights where the combat log failed to track active Pokémon changes after one fainted. The script now correctly assigns damage dealt and taken to the correct Pokémon entering the field.

## [1.0] - 2026-08-06
### Added
- Initial release.
- Added a draggable Combat Log HUD to track session stats.
- Added damage dealt and taken tracking per Pokémon, including average damage per hit.
- Added a detailed history view for each Pokémon (last 100 hits and level-ups).
- Added features to copy session data to clipboard or save as `.json`.
- Implemented real-time network interception for instantaneous updates.
