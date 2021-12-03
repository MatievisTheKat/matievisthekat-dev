"use strict";
var entries = performance.getEntriesByType('resource');
var requests = entries.map(function (e) { return ({
    url: e.name,
    duration: e.duration,
    size: e.transferSize
}); });
console.log(requests);
//# sourceMappingURL=requests.js.map