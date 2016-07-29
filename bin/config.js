"use strict";
const inMemoryCache_1 = require("./cache/provider/inMemoryCache");
const envResolver_1 = require("./resolver/provider/envResolver");
class Config {
    constructor() {
        this.cacheInstance = new inMemoryCache_1.InMemoryCache();
        this.configResolver = [];
        this.configResolver.push(new envResolver_1.EnvResolver());
    }
    getValue(key, defaultValue) {
        let value = null;
        for (let i = 0; i < this.configResolver.length; ++i) {
            value = this.configResolver[i].resolveKey(key, this.cacheInstance);
            if (value !== null) {
                return value;
            }
        }
        return value || defaultValue;
    }
    getString(key, defaultValue) {
        return this.getValue(key, defaultValue);
    }
    getBool(key, defaultValue) {
        let value = this.getValue(key, defaultValue);
        if (value !== undefined) {
            return value.toString().trim().toUpperCase() === "TRUE";
        }
        else {
            return false;
        }
    }
    getNumber(key, defaultValue) {
        let value = this.getValue(key, defaultValue);
        if (value) {
            return parseFloat(value);
        }
        else {
            return 0;
        }
    }
    setValue(key, value) {
        this.cacheInstance.setEntry(key, function (k) {
            return value;
        });
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map