"use strict";
const age = document.querySelector('span#age');
if (age) {
    const birthday = new Date(2005, 3, 13);
    setInterval(() => {
        const diff = Date.now() - birthday.getTime();
        const yearInMs = 3.154e10;
        const str = (diff / yearInMs).toLocaleString(undefined, { maximumFractionDigits: 10, minimumFractionDigits: 10 });
        age.innerText = str;
    }, 50);
}
else
    console.warn('[age] span#age element not found');
//# sourceMappingURL=age.js.map