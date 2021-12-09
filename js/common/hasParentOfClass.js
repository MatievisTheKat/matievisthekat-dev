"use strict";
function hasSomeParentOfClass(element, classname) {
    var _a;
    if (element.classList.contains(classname))
        return true;
    return (_a = (element.parentElement && hasSomeParentOfClass(element.parentElement, classname))) !== null && _a !== void 0 ? _a : false;
}
//# sourceMappingURL=hasParentOfClass.js.map