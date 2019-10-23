"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useUnmount_1 = require("./useUnmount");
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef(null);
    var nextValue = react_1.useRef(null);
    var hasNextValue = react_1.useRef(null);
    // 保证在ms时间内，timeout.current一直不为空，只会执行timeoutCallback
    react_1.useEffect(function () {
        if (!timeout.current) {
            // 第一次赋值
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    // 不存在更新值，清空定时器
                    timeout.current = null;
                }
            };
            // 进来后先执行一次定时器任务
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            // 存在定时器，保存最新值
            // 更新有更新值的状态
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1["default"](function () {
        clearTimeout(timeout.current);
    });
    return state;
};
exports["default"] = useThrottle;
// const Demo = () => {
//   const [value, setValue] = React.useState('');
//   const throttledValue = useThrottle(value, 2000);
//   const [lastThrottledValue, setLastThrottledValue] = React.useState(throttledValue);
//   React.useEffect(() => {
//     if (lastThrottledValue !== throttledValue) {
//       setLastThrottledValue(throttledValue);
//     }
//   });
//   return (
//     <div style={{ width: 300, margin: '40px auto' }}>
//       <input
//         type="text"
//         value={value}
//         placeholder="Throttled input"
//         style={{ width: '100%' }}
//         onChange={({ currentTarget }) => {
//           setValue(currentTarget.value);
//         }}
//       />
//       <br />
//       <br />
//       <div>Throttled value: {throttledValue}</div>
//     </div>
//   );
// };
