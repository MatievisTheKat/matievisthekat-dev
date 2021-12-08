"use strict";
var _a;
const theme = (window.localStorage.getItem('theme') || 'light');
const colourblind = (window.localStorage.getItem('colourblind') || 'none');
(_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add(colourblind, theme);
window.addEventListener('click', (e) => {
    if (e.target &&
        !e.target.classList.contains('theme-dropdown') &&
        !e.target.classList.contains('theme')) {
        const mode = e.target.id;
        toggleDropdown(mode);
    }
});
function toggleDropdown(mode) {
    const dropdown = document.querySelector(`div#${mode}.theme-dropdown`);
    if (dropdown) {
        if (!dropdown.classList.contains('hide')) {
            hideDropdown(mode);
        }
        else
            dropdown.classList.remove('hide');
    }
    else
        console.warn(`[toggleDropdown(${mode})] div#${mode}-dropdown not found`);
    const otherMode = mode === 'colourblind' ? 'theme' : 'colourblind';
    const otherDropdown = document.querySelector(`div#${otherMode}.theme-dropdown`);
    if (otherDropdown) {
        hideDropdown(otherMode);
    }
    else
        console.warn(`[toggleDropdown(${mode})] div#${otherMode}-dropdown not found`);
}
function hideDropdown(mode) {
    const dropdown = document.querySelector(`div#${mode}.theme-dropdown`);
    if (dropdown) {
        dropdown.classList.add('will-hide');
        setTimeout(() => {
            dropdown.classList.add('hide');
            dropdown.classList.remove('will-hide');
        }, 500);
    }
    else
        console.warn(`[hideDropdown(${mode})] div#${mode}-dropdown not found`);
}
//# sourceMappingURL=theme.js.map