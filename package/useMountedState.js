"use strict";
exports.__esModule = true;
var react_1 = require("react");
// 判断是否mounted完
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    // 使用useCallback 主要是为了在useEffect回调后取得useEffect的状态
    // 这里使用useCallback可以有效减少useEffect的调用次数
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return (function () {
            mountedRef.current = false;
        });
    }, []);
    return get;
}
exports["default"] = useMountedState;
// const Demo = () => {
//   const isMounted = useMountedState();
//   const [state, useState] = React.useState(false);
//   React.useEffect(() => {
//     setTimeout(() => {
//       if (isMounted()) {
//         useState(isMounted());
//       } else {
//         useState(isMounted());
//       }
//     }, 1000);
//   });
//   return (
//     <div>{state ? '1' : '2'}</div>
//   )
// };
