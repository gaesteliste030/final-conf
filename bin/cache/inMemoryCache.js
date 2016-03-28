"use strict";
var InMemoryCache = (function () {
    function InMemoryCache() {
        this.storage = new Array();
    }
    InMemoryCache.prototype.getOrSetEntry = function (key, valueSetter) {
        if (this.storage[key] != undefined) {
            return this.storage[key];
        }
        else {
            return valueSetter(key);
        }
    };
    return InMemoryCache;
}());
exports.InMemoryCache = InMemoryCache;
//# sourceMappingURL=inMemoryCache.js.map