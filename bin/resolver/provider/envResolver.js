"use strict";
var EnvResolver = (function () {
    function EnvResolver() {
        var dotenv = require("dotenv").config({ silent: true });
    }
    EnvResolver.prototype.resolveKey = function (key, cache) {
        return cache.getOrSetEntry(key, function (key) {
            return process.env[key] || null;
        });
    };
    return EnvResolver;
}());
exports.EnvResolver = EnvResolver;
//# sourceMappingURL=envResolver.js.map