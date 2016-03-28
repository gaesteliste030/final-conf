"use strict";
var InMemoryCache = (function () {
    function InMemoryCache() {
        this.storage = [];
    }
    InMemoryCache.prototype.getOrSetEntry = function (key, valueSetter) {
        if (this.storage[key] != undefined) {
            return this.storage[key];
        }
        else {
            var value = valueSetter(key);
            if (value !== null) {
                this.storage[key] = value;
            }
            return value;
        }
    };
    InMemoryCache.prototype.setEntry = function (key, valueSetter) {
        var value = valueSetter(key);
        this.storage[key] = value;
    };
    return InMemoryCache;
}());
exports.InMemoryCache = InMemoryCache;
//# sourceMappingURL=inMemoryCache.js.map