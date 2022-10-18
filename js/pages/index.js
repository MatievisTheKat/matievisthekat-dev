"use strict";
const socials = document.querySelectorAll('div#external-links > a');
if (socials.length > 0) {
    socials.forEach((a) => {
        var _a;
        const title = (_a = a.attributes.getNamedItem('data-title')) === null || _a === void 0 ? void 0 : _a.textContent;
        const rect = a.getBoundingClientRect();
        if (title) {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.id = `tooltip-${title.toLowerCase()}`;
            tooltip.textContent = title;
            tooltip.style.top = `${rect.top - 3}px`;
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.height = `${rect.height}px`;
            tooltip.style.width = `${rect.width}px`;
            const addTooltip = () => {
                a.appendChild(tooltip);
            };
            const removeTooltip = () => {
                a.removeChild(tooltip);
            };
            a.addEventListener('mouseover', addTooltip);
            a.addEventListener('mouseout', removeTooltip);
            tooltip.addEventListener('mouseover', addTooltip);
        }
    });
}
//# sourceMappingURL=index.js.map