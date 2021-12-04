"use strict";
const el = document.querySelector('span#age');
if (el) {
    const birthday = new Date(2005, 4, 13);
    setInterval(() => {
        const diff = Date.now() - birthday.getTime();
        const yearInMs = 3.154e10;
        const age = (diff / yearInMs).toLocaleString(undefined, { maximumFractionDigits: 10, minimumFractionDigits: 10 });
        el.innerText = age;
    }, 1);
}
else
    console.warn('[age] span#age element not found');
//# sourceMappingURL=age.js.map