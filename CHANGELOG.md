# Changelog

All notable changes to this project will be documented in this file.

## [1.3] - 2026-08-06
### Fixed
- Boss cinematic attacks (like `poisonburst`, `tentacleslap`) which deal massive damage are now properly captured and registered in the combat log as damage taken.

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
