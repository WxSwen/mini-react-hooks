"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useInterval = function (cb, timeout) {
    var savedCallback = react_1.useRef();
    react_1.useEffect(function () {
        savedCallback.current = cb;
    });
    react_1.useEffect(function () {
        var timer = setInterval(function () { return savedCallback.current(); }, timeout);
        return function () { return clearInterval(timer); };
    }, []);
};
exports["default"] = useInterval;
