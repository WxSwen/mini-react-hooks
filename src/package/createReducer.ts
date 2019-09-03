import { useCallback, useRef, useState } from 'react';
import useUpdateEffect from './useUpdateEffect';

// 模拟redux实现 getState / dispatch 等方法
// 添加中间件

function composeMiddleware(chain) {
  return (context, dispatch) => {
    return chain.reduceRight((res, middleware) => {
      return middleware(context)(res);
    }, dispatch);
  }
};

const createReducer = (...middlewares) => {
  // 支持中间件
  let middleware = composeMiddleware(middlewares);

  // 接受reducer和初始化state参数，返回 state和dispatch
  return (reducer, initialState, initializer = value => value) => {
    let ref = useRef(initializer(initialState));


    // 保证每次dispatch都会经过每个middleware
    let dispatchs = useCallback(
      action =>{
        middleware(reducer, action);
        ref.current = reducer(action);
        return action;
      },
      [reducer]);


    return [ref.current, dispatchs];
  }
}


// import { createReducer } from 'react-use';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// const useThunkReducer = createReducer(thunk, logger);

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: action.payload };
//     default:
//       throw new Error();
//   }
// }

// const Demo = ({ initialCount = 1 }) => {
//   // Action creator to increment count, wait a second and then reset
//   const addAndReset = React.useCallback(() => {
//     return dispatch => {
//       dispatch({ type: 'increment' });

//       setTimeout(() => {
//         dispatch({ type: 'reset', payload: initialCount });
//       }, 1000);
//     };
//   }, [initialCount]);

//   const [state, dispatch] = useThunkReducer(reducer, initialCount);

//   return (
//     <div>
//       <p>count: {state.count}</p>
//       <button onClick={() => dispatch(addAndReset())}>Add and reset</button>
//       <button
//         onClick={() => dispatch({ type: 'reset', payload: initialCount })}
//       >
//         Reset
//       </button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     </div>
//   );
// };

