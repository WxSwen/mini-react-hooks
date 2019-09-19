// import { DependencyList, useCallback, useState } from 'react';
// import useMountedState from './useMountedState';

// export type AsyncState<T> =
//   | {
//       loading: boolean;
//       error?: undefined;
//       value?: undefined;
//     }
//   | {
//       loading: false;
//       error: Error;
//       value?: undefined;
//     }
//   | {
//       loading: false;
//       error?: undefined;
//       value: T;
//     };
    
// export type AsyncFn<Result = any, Args extends any[] = any[]> = [
//   AsyncState<Result>,
//   (...args: Args | []) => Promise<Result>
// ];

// export default function useAsyncFn<Result = any, Args exte>