"use strict";
const sections = document.querySelectorAll('section.page');
sections.forEach((sect) => {
    document.body.addEventListener('scroll', () => {
        const scrollValue = Math.fround(sect.offsetTop - document.body.scrollTop);
        sect.style.setProperty('--translate', `-${scrollValue / 4}px`);
    });
});
//# sourceMappingURL=index.js.map