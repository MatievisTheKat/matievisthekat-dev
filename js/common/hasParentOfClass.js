"use strict";
function hasSomeParentOfClass(element, classname) {
    var _a;
    if (element.className.split(' ').indexOf(classname) >= 0)
        return true;
    return (_a = (element.parentElement && hasSomeParentOfClass(element.parentElement, classname))) !== null && _a !== void 0 ? _a : false;
}
//# sourceMappingURL=hasParentOfClass.js.map