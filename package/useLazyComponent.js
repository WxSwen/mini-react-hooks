"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
function UseCreateLoadableComponent(opts) {
    var loadFn = opts.loadFn;
    var _a = react_1.useState(__assign({ error: null, loading: false, loaded: null }, opts)), state = _a[0], setState = _a[1];
    var res = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!res.current) {
            res.current = loadFn(state.loader);
        }
    }, []);
    react_1.useEffect(function () {
        if (!state.loading) {
            return;
        }
        res.current.promise
            .then(function () {
            setState(__assign(__assign({}, state), res.current));
        })["catch"](function (err) {
            setState(__assign(__assign({}, state), res.current));
        });
    }, [res.current]);
    return function () {
        if (state.loading || state.error) {
            return react_1["default"].createElement(state.loading, null);
        }
        else if (state.loaded) {
            return react_1["default"].createElement(state.loaded["default"], null);
        }
        else {
            return null;
        }
    };
}
function CreateLoadableComponent(opts) {
    if (!opts.loading) {
        throw new Error("Requires a `loading` component");
    }
    ;
    return function () { return UseCreateLoadableComponent(opts)(); };
}
function load(loader) {
    var promise = loader();
    var state = {
        loading: true,
        loaded: null,
        error: null,
        promise: null
    };
    state.promise = promise
        .then(function (loaded) {
        state.loading = false;
        state.loaded = loaded;
        return loaded;
    })["catch"](function (err) {
        state.loading = false;
        state.error = err;
        throw err;
    });
    return state;
}
function Loadable(opts) {
    return CreateLoadableComponent(__assign(__assign({}, opts), { loadFn: load }));
}
exports["default"] = Loadable;
{
}