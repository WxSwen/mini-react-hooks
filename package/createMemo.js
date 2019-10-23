"use strict";
exports.__esModule = true;
var react_1 = require("react");
var createMemo = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return react_1.useMemo(function () { return fn.apply(void 0, args); }, args);
    };
};
exports["default"] = createMemo;
// example
// const fibonacci: any = (n: number) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
// const useMemoFibonacci = createMemo(fibonacci);
// const Demo = (props: any) => {
//   const result = useMemoFibonacci(props.number);
//   return (
//     <div>
//       fib({props.number}) = {result}
//     </div>
//   );
// };
