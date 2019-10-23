"use strict";
exports.__esModule = true;
var react_1 = require("react");
// 忽略第一次更新，其余跟useEffect一致
var useUpdateEffect = function (effect, deps) {
    var isInitialMount = react_1.useRef(true);
    react_1.useEffect(isInitialMount.current
        ? function () {
            isInitialMount.current = false;
        }
        : effect, deps);
};
exports["default"] = useUpdateEffect;
// example
// const Demo = () => {
//   const [count, setCount] = React.useState(0);
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000)
//     return () => {
//       clearInterval(interval)
//     }
//   }, [])
//   useUpdateEffect(() => {
//     console.log('count', count) // will only show 1 and beyond
//     return () => { // *OPTIONAL*
//       // do something on unmount
//     }
//   }) // you can include deps array if necessary
//   return <div>Count: {count}</div>
// };
