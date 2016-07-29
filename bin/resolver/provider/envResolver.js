"use strict";
class EnvResolver {
    constructor() {
        const dotenv = require("dotenv").config({ silent: true });
    }
    resolveKey(key, cache) {
        return cache.getOrSetEntry(key, function (key) {
            return process.env[key] || null;
        });
    }
}
exports.EnvResolver = EnvResolver;
//# sourceMappingURL=envResolver.js.map