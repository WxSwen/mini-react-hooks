"use strict";
exports.__esModule = true;
var useEffectOnce_1 = require("./useEffectOnce");
var useUnmount = function (fn) {
    useEffectOnce_1["default"](function () { return fn; });
};
exports["default"] = useUnmount;
