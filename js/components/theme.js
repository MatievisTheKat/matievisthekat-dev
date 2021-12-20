"use strict";
var _a;
let theme = (window.localStorage.getItem('theme') || 'light');
let colourblind = (window.localStorage.getItem('colourblind') || 'none');
(_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add(colourblind, theme);
window.addEventListener('click', (e) => {
    const target = e.target;
    if (e.target && !hasSomeParentOfClass(target, 'theme-dropdown') && !hasSomeParentOfClass(target, 'theme')) {
        hideDropdown('theme');
        hideDropdown('colourblind');
    }
});
function toggleDropdown(mode) {
    const dropdown = document.querySelector(`div#${mode}-dropdown.theme-dropdown`);
    if (dropdown) {
        if (!dropdown.classList.contains('hide') && !dropdown.classList.contains('will-hide')) {
            hideDropdown(mode);
        }
        else {
            const items = dropdown.querySelectorAll('ul > li');
            const checkSelected = () => {
                items.forEach((li) => {
                    const data = li.attributes.getNamedItem('data-value');
                    if (!data)
                        return console.warn(`[toggleDropdown(${mode}) -> li] 'data-value' not found`);
                    if (theme === data.value || colourblind === data.value) {
                        li.id = 'selected';
                    }
                    else
                        li.id = '';
                });
            };
            checkSelected();
            items.forEach((li) => {
                const data = li.attributes.getNamedItem('data-value');
                if (!data)
                    return console.warn(`[toggleDropdown(${mode}) -> li] 'data-value' not found`);
                li.addEventListener('click', () => {
                    if (mode === 'theme') {
                        setTheme(data.value);
                    }
                    else {
                        setColourblind(data.value);
                    }
                    checkSelected();
                });
            });
            dropdown.classList.remove('hide');
        }
    }
    else
        console.warn(`[toggleDropdown(${mode})] div#${mode}-dropdown not found`);
    const otherMode = mode === 'colourblind' ? 'theme' : 'colourblind';
    const otherDropdown = document.querySelector(`div#${otherMode}-dropdown.theme-dropdown`);
    if (otherDropdown) {
        hideDropdown(otherMode);
    }
    else
        console.warn(`[toggleDropdown(${mode})] div#${otherMode}-dropdown not found`);
}
function hideDropdown(mode) {
    const dropdown = document.querySelector(`div#${mode}-dropdown.theme-dropdown`);
    if (dropdown) {
        if (!dropdown.classList.contains('hide')) {
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
            console.warn(`[hideDropdown(${mode})] div#${mode}-dropdown is already hidden`);
    }
    else
        console.warn(`[hideDropdown(${mode})] div#${mode}-dropdown not found`);
}
function setTheme(newTheme) {
    var _a, _b;
    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.remove('light', 'dark');
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.add(newTheme);
    window.localStorage.setItem('theme', newTheme);
    theme = newTheme;
}
function setColourblind(cb) {
    var _a, _b;
    (_a = document
        .querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.remove('none', 'protanopia', 'dueteranopia', 'tritanopia', 'achromatopsia', 'protanomaly', 'deuteranomaly', 'tritanomaly', 'achromatomaly');
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.add(cb);
    window.localStorage.setItem('colourblind', cb);
    colourblind = cb;
}
//# sourceMappingURL=theme.js.map