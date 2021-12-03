"use strict";
var requests = [];
var entries = performance.getEntriesByType('resource');
entries.forEach(function (e) {
    return requests.push({ url: e.name, duration: e.duration, size: e.transferSize });
});
console.log(requests);
//# sourceMappingURL=requests.js.map