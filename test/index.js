var assert = require("assert");
var config = require("../bin/index");

describe('Functional', function () {
    describe('#getValue()', function () {
        var testValue = "test value";

        it('should return "' + testValue + '" as default value', function () {
            assert.equal(testValue, config.getValue("Non existing key", testValue));
        });
    });

    describe('#getBool()', function () {
        it('should return "true', function () {
            config.setValue("TestKeyBool", true);

            assert.equal(true, config.getBool("TestKeyBool", false));
        });
    });

    describe('#getNumber()', function () {
        it('should return "true', function () {
            config.setValue("TestKeyNumber", 2.3);

            assert.equal(2.3, config.getNumber("TestKeyNumber", 0));
        });
    });
});

describe('Resolver', function () {
    describe('Get value from .env file', function () {
        it('should return "1"', function () {
            assert.equal(1, config.getValue("TEST_ENV_FILE", 0));
        });
    });
});

describe("Singleton", function () {
    it('ensure singleton', function () {
        config.setValue("Singleton", false);

        var test1 = require("../bin/index");
        test1.setValue("Singleton", true);

        assert.equal(true, config.getBool("Singleton", false));
    });
});