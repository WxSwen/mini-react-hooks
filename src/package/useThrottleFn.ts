import { useEffect, useRef, useState } from 'react';
import useUnmount from './useUnmount';


const useThrottleFn = <T>(fn: (...args: any[]) => T, ms: number = 200, args: any[]) => {
  const [state, setState] = useState(fn(...args));
  const timeout = useRef(null) as any;
  const nextArgs = useRef(null) as any;
  const hasNextArgs = useRef(null) as any;

  useEffect(() => {
    if (!timeout.current) {
      setState(fn(...args));

      const timeoutCallback = () => {
        if (hasNextArgs.current) {
          hasNextArgs.current = false;
          setState(fn(...nextArgs.current));
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = null;
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextArgs.current = args;
      hasNextArgs.current = true;
    }

  }, [args])

  useUnmount(() => {
    clearTimeout(timeout.current);
  });

  return state;
}

export default useThrottleFn;