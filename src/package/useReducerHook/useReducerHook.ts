import { useState, useEffect } from 'react';

// let [X, Y] = useState();
let listeners: Array<any> = [];
let state = { counter: 0 };

const setState = (newState):void => {
  state = { ...state, ...newState };
  console.log(state);
  listeners.forEach((setListener: any) => {
    setListener(state);
  })
}

const useCustom = (): [any, (T) => void] => {
  const [, newSetState] = useState();

  useEffect(() => {
    listeners.push(newSetState)
  }, [])

  return [state, setState]
}

export default useCustom;

