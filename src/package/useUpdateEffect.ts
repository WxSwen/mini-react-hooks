import { useEffect, useRef } from 'react';

// 忽略第一次更新，其余跟useEffect一致
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isInitialMount = useRef(true);

  useEffect(
    isInitialMount.current
    ? () => {
      isInitialMount.current = false;
    }
    : effect,
    deps
  )
}

export default useUpdateEffect;

// example
// const Demo = () => {
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [])

//   useUpdateEffect(() => {
//     console.log('count', count) // will only show 1 and beyond

//     return () => { // *OPTIONAL*
//       // do something on unmount
//     }
//   }) // you can include deps array if necessary

//   return <div>Count: {count}</div>
// };