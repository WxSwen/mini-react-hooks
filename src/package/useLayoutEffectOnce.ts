import { EffectCallback, useLayoutEffect } from "react";

const useLayoutEffectOnce = (layoutEffect: EffectCallback) => {
  useLayoutEffect(layoutEffect, []);
};

export default useLayoutEffectOnce;
