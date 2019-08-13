import { useEffect, useRef, useState } from 'react';
import useUnmount from './useUnmount';

const useThrottle = (value: any, ms: number = 200) => {
  const [state, setState] = useState(value);
  const timeout = useRef(null) as any;
  const nextValue = useRef(null) as any;
  const hasNextValue = useRef(null) as any;
  // 保证在ms时间内，timeout.current一直不为空，只会执行timeoutCallback
  useEffect(() => {
    if(!timeout.current) {
      // 第一次赋值
      setState(value);

      const timeoutCallback = () => {
        if(hasNextValue.current) {
          hasNextValue.current = false;
          setState(nextValue.current);
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          // 不存在更新值，清空定时器
          timeout.current = null;
        }
      }
      // 进来后先执行一次定时器任务
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      // 存在定时器，保存最新值
      // 更新有更新值的状态
      nextValue.current = value;
      hasNextValue.current = true;
    }
  }, [value])

  useUnmount(() => {
    clearTimeout(timeout.current);
  });

  return state;
}

export default useThrottle;


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