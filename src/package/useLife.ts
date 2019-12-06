import { useState, useEffect, useRef } from "react";
// import { createMemo } from "mini-react-hooks";

// reset rebase history
// pull push merge
// stepto

const useLife = (initState, opts: any = { maxSteps: 5 }) => {
  let [state, setState] = useState(initState);
  let [isTrigger, setIsTrigger] = useState(false);
  let storeData = useRef([]) as any;
  let stepBy = useRef(0) as any;
  let { effectFn, maxSteps, log, op } = opts;

  if (maxSteps < 0) {
    throw new Error("Step should be >= 0");
  }
  useEffect(() => {
    const executeQueue = () => {
      let len = storeData.current.length;
      if (len >= maxSteps) {
        storeData.current.shift();
      }
      storeData.current.push({
        state
      });
      effectFn && effectFn();
    };
    executeQueue();
    if (log) {
      console.log(storeData.current);
    }
  }, [state]);

  useEffect(() => {
    if (isTrigger) {
      let { state } = storeData.current[stepBy.current];
      setState(state);
      effectFn && effectFn();
    }
    return () => {
      setIsTrigger(false);
    };
  }, [isTrigger]);

  function stepToNumber(number) {
    let storeMaxStep = storeData.current.length - 1;

    if (typeof number === "string" && number.toLocaleLowerCase() === "head") {
      stepBy.current = storeMaxStep;
    } else if (parseInt(number)) {
      number = parseInt(number);
      if (isNaN(number)) {
        throw new Error("Please input correct step");
      } else if (number < 0 || number > storeMaxStep) {
        throw new Error(`Step should be between 0 ~ ${storeMaxStep}`);
      } else {
        stepBy.current = number;
      }
    }
    // 内部触发
    setIsTrigger(true);
  }
  // const stepTo = createMemo(stepToNumber);

  return [state, setState, stepToNumber];
};

export default useLife;
