"use strict";
var BIBYTE_UNITS = ['B', 'kiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
function prettybytes(number) {
    if (number === 0)
        return " 0".concat(BIBYTE_UNITS[0]);
    var exponent = Math.min(Math.floor(Math.log(number) / Math.log(1024)), BIBYTE_UNITS.length - 1);
    number /= Math.pow(1024, exponent);
    var numberString = number.toLocaleString();
    var unit = BIBYTE_UNITS[exponent];
    return "".concat(numberString).concat(unit);
}
//# sourceMappingURL=prettybytes.js.map