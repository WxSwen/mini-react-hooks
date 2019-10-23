"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useToggle = function (initValue) {
    var _a = react_1.useState(initValue), value = _a[0], setValue = _a[1];
    var toggle = react_1.useCallback(function (nextValue) {
        if (typeof nextValue === 'boolean') {
            setValue(nextValue);
        }
        else {
            // currentValue => value ? 
            // setValue(value => !value);
            setValue(function (currentValue) { return !currentValue; });
        }
    }, [setValue]);
    return [value, toggle];
};
exports["default"] = useToggle;
// const Demo = () => {
//   const [on, toggle] = useToggle(true);
//   return (
//     <div>
//       <div>{on ? 'ON' : 'OFF'}</div>
//       <button onClick={toggle}>Toggle</button>
//       <button onClick={() => toggle(true)}>set ON</button>
//       <button onClick={() => toggle(false)}>set OFF</button>
//     </div>
//   );
// };
