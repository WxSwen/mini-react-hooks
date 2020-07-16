import { useEffect, useRef } from "react";

const useInterval = (cb: Function, timeout: number) => {
  let savedCallback = useRef() as any;

  useEffect(() => {
    savedCallback.current = cb;
  });

  useEffect(() => {
    let timer = setInterval(() => savedCallback.current(), timeout);
    return () => clearInterval(timer);
  }, []);
};

export default useInterval;
