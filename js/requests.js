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
    tableBody.innerHTML += "\n    <tr class=\"request\">\n      <td class=\"size\">".concat(req.size.toFixed(0), "B</td>\n      <td class=\"url\">").concat(req.url, "</td>\n      <td class=\"duration\">(").concat(req.duration.toFixed(1), "ms)</td>\n    </tr>\n  ");
}
//# sourceMappingURL=requests.js.map