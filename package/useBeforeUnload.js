"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    react_1.useEffect(function () {
        if (!enabled) {
            return;
        }
        var handler = function (event) {
            event.preventDefault();
            if (message) {
                event.returnValue = message;
            }
            return message;
        };
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, [message, enabled]);
};
exports["default"] = useBeforeUnload;
// const Demo = () => {
//   const [dirty, toggleDirty] = useToggle(false);
//   useBeforeUnload(dirty, 'You have unsaved changes, are you sure?');
//   return (
//     <div>
//       {dirty && <p>Try to reload or close tab</p>}
//       <button onClick={() => toggleDirty()}>{dirty ? 'Disable' : 'Enable'}</button>
//     </div>
//   );
// };
