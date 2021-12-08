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
        else {
            dropdown.querySelectorAll('ul > li').forEach((li) => {
                const data = li.attributes.getNamedItem('data-value');
                if (!data)
                    return console.warn(`[toggleDropdown(${mode}) -> li] 'data-value' not found`);
                if (theme === data.value || colourblind === data.value) {
                    li.classList.add('theme-selected');
                }
                li.addEventListener('click', () => {
                    if (mode === 'theme') {
                        setTheme(data.value);
                    }
                    else {
                        setColourblind(data.value);
                    }
                });
            });
            dropdown.classList.remove('hide');
        }
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
            var _a;
            dropdown.classList.remove('will-hide');
            dropdown.classList.add('hide');
            const clone = dropdown.cloneNode(true);
            (_a = dropdown.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(clone, dropdown);
        }, 500);
    }
    else
        console.warn(`[hideDropdown(${mode})] div#${mode}-dropdown not found`);
}
function setTheme(theme) {
    var _a, _b;
    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.remove('light', 'dark', 'solarized');
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.add(theme);
    window.localStorage.setItem('theme', theme);
}
function setColourblind(cb) {
    var _a, _b;
    (_a = document
        .querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.remove('none', 'protanopia', 'dueteranopia', 'tritanopia', 'achromatopsia', 'protanomaly', 'deuteranomaly', 'tritanomaly', 'achromatomaly');
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.add(cb);
    window.localStorage.setItem('colourblind', cb);
}
//# sourceMappingURL=theme.js.map