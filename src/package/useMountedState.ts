import { useEffect, useRef, useCallback } from 'react';

// 判断是否mounted完
export default function useMountedState(): () => boolean {
  const mountedRef = useRef(false);

  // 使用useCallback 主要是为了在useEffect回调后取得useEffect的状态
  // 这里使用useCallback可以有效减少useEffect的调用次数
  const get = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return(() => {
      mountedRef.current = false;
    })
  }, []);
  
  return get;
}

// const Demo = () => {
//   const isMounted = useMountedState();
//   const [state, useState] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(() => {
//       if (isMounted()) {
//         useState(isMounted());
//       } else {
//         useState(isMounted());
//       }
//     }, 1000);
//   });

//   return (
//     <div>{state ? '1' : '2'}</div>
//   )
// };