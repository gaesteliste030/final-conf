"use strict";
var inMemoryCache_1 = require("./cache/provider/inMemoryCache");
var envResolver_1 = require("./resolver/provider/envResolver");
var Config = (function () {
    function Config() {
        this.cacheInstance = new inMemoryCache_1.InMemoryCache();
        this.configResolver = [];
        this.configResolver.push(new envResolver_1.EnvResolver());
    }
    Config.prototype.getValue = function (key, defaultValue) {
        var value = null;
        for (var i = 0; i < this.configResolver.length; ++i) {
            value = this.configResolver[i].resolveKey(key, this.cacheInstance);
            if (value !== null) {
                return value;
            }
        }
        return value || defaultValue;
    };
    Config.prototype.getString = function (key, defaultValue) {
        return this.getValue(key, defaultValue);
    };
    Config.prototype.getBool = function (key, defaultValue) {
        var value = this.getValue(key, defaultValue);
        if (value !== undefined) {
            return value.toString().trim().toUpperCase() === "TRUE";
        }
        else {
            return false;
        }
    };
    Config.prototype.getNumber = function (key, defaultValue) {
        var value = this.getValue(key, defaultValue);
        if (value) {
            return parseFloat(value);
        }
        else {
            return 0;
        }
    };
    Config.prototype.setValue = function (key, value) {
        this.cacheInstance.setEntry(key, function (k) {
            return value;
        });
    };
    return Config;
}());
exports.Config = Config;
var singleton = new Config();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = singleton;
//# sourceMappingURL=index.js.map