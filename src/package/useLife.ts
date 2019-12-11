import { useState, useEffect, useRef, useCallback } from "react";

// history -> 提供effectFn
// reset -> 直接删除后续节点
// pull -> 直接合并，提供fn
// push -> 直接合并到head，提供fn
// merge -> 直接合并到当前，提供fn
// checkout -> 提供stepTo

const useLife = (initState, opts: any = { maxSteps: 5, reset: false }) => {
  let { effectFn, maxSteps } = opts;
  let [state, setState] = useState(initState);
  let [finalState, setFinalState] = useState(null);
  let [isTrigger, setIsTrigger] = useState(false);
  let storeData = useRef([]) as any;
  let currentStep = useRef(0) as any;

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
    };

    if (!isTrigger) {
      executeQueue();
    }
    effectFn && effectFn(storeData.current);
    setIsTrigger(false);
  }, [state]);

  useEffect(() => {
    if (isTrigger) {
      setState(finalState);
    }
  }, [isTrigger]);

  function getCurrentStep(number) {
    let storeMaxStep = storeData.current.length - 1;
    let currentStep: number = 0;

    if (typeof number === "string" && number.toLocaleLowerCase() === "head") {
      currentStep = storeMaxStep;
    } else if (typeof parseInt(number) === "number") {
      if (number < 0 || number > storeMaxStep) {
        throw new Error(`Step should be between 0 ~ ${storeMaxStep}`);
      } else {
        currentStep = number;
      }
    } else {
      throw new Error("Please input correct step");
    }
    return currentStep;
  }

  function stepToNumber(number) {
    currentStep.current = getCurrentStep(number);
    let { state } = storeData.current[currentStep.current];
    setFinalState(state);
    setIsTrigger(true);
  }
  const stepTo = useCallback(stepToNumber, []);

  function execution(order, number, orderFn) {
    let { state } = storeData.current[currentStep.current];
    let headState = null;
    let finalState = null;

    if (order === "push" || order === "pull" || order === "merge") {
      headState = (storeData.current[
        order === "merge" ? number : storeData.current.length - 1
      ] as any).state;

      if (orderFn) {
        finalState = orderFn(state, headState);
      } else {
        finalState = order === "push" ? state : headState;
      }

      setFinalState(finalState);
      setIsTrigger(true);
    } else if (order === "reset") {
      storeData.current.splice(number, storeData.current.length - 1);
      effectFn && effectFn(storeData.current);
    } else {
      throw new Error("No defind order");
    }
  }
  const execute = useCallback(execution, []);

  return [state, setState, stepTo, execute];
};

export default useLife;
