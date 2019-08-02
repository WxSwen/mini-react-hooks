import { useMemo } from 'react';

const createMemo = <T extends (...args: any) => any>(fn: T) => 
  (...args: Parameters<T>) => 
  useMemo<ReturnType<T>>(() => fn(...args), args);

export default createMemo;


// example
// const fibonacci: any = (n: number) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const useMemoFibonacci = createMemo(fibonacci);

// const Demo = (props: any) => {
//   const result = useMemoFibonacci(props.number);

//   return (
//     <div>
//       fib({props.number}) = {result}
//     </div>
//   );
// };
