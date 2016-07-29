"use strict";
class InMemoryCache {
    constructor() {
        this.storage = [];
    }
    getOrSetEntry(key, valueSetter) {
        if (this.storage[key] != undefined) {
            return this.storage[key];
        }
        else {
            let value = valueSetter(key);
            if (value !== null) {
                this.storage[key] = value;
            }
            return value;
        }
    }
    setEntry(key, valueSetter) {
        let value = valueSetter(key);
        this.storage[key] = value;
    }
}
exports.InMemoryCache = InMemoryCache;
//# sourceMappingURL=inMemoryCache.js.map