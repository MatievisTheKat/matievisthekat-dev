"use strict";
var tableBody = document.querySelector('tbody#requests');
var entries = performance.getEntriesByType('resource');
var requests = entries.map(function (e) { return ({
    url: e.name.split(window.location.host).pop(),
    duration: e.duration,
    size: e.transferSize
}); });
for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
    var req = requests_1[_i];
    tableBody.innerHTML += "\n    <tr class=\"request\">\n      <td class=\"size\">".concat(prettybytes(req.size), "</td>\n      <td class=\"url\">").concat(req.url, "</td>\n      <td class=\"duration\">(").concat(req.duration.toFixed(1), "ms)</td>\n    </tr>\n  ");
}
tableBody.innerHTML += "\n  <tr class=\"total\">\n    <td class=\"size\">".concat(prettybytes(entries.reduce(function (acc, e) { return acc + e.transferSize; }, 0)), "</td>\n    <td class=\"url\">").concat(window.location.pathname, "</td>\n    <td class=\"duration\">").concat((entries.reduce(function (acc, e) { return acc + e.duration; }, 0) / 1000).toFixed(1), "s</td>\n  </tr>\n");
//# sourceMappingURL=requests.js.map