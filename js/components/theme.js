"use strict";
var _a;
const theme = (window.localStorage.getItem('theme') || 'light');
const colourblind = (window.localStorage.getItem('colourblind') || 'none');
(_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add(colourblind, theme);
function toggleDropdown(mode) {
    const dropdown = document.querySelector(`div#${mode}.theme-dropdown`);
    if (dropdown) {
        dropdown.classList.toggle('hide');
    }
    else
        console.warn(`[toggleDropdown(${mode})] div#${mode}-dropdown not found`);
    const otherMode = mode === 'colourblind' ? 'theme' : 'colourblind';
    const otherDropdown = document.querySelector(`div#${otherMode}.theme-dropdown`);
    if (otherDropdown) {
        otherDropdown.classList.add('hide');
    }
    else
        console.warn(`[toggleDropdown(${mode})] div#${otherMode}-dropdown not found`);
}
//# sourceMappingURL=theme.js.map