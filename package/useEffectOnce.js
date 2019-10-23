"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports["default"] = useEffectOnce;
