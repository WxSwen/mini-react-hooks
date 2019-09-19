// 发布订阅简单模式
// let state = {
//   count: 1
// }

// let listeners = [];

// function subscribe(listener) {
//   listeners.push(listener);
// }

// function changeCount(count) {
//   state.count = count;
//   for(let i = 0; i < listeners.length; i++) {
//     const listener = listeners[i];
//     listener();
//   }
// }

// subscribe(() => {
//   console.log(state.count);
// });

// changeCount(2);
// changeCount(3);
// changeCount(4);


// 缺点：值可以随意改动
// const createStore = function(initState) {
//   let state = initState;
//   let listeners = [];

//   function subscribe(listener) {
//     listeners.push(listener);
//   };

//   function changeState(newState) {
//     state = newState;
//     for (let i = 0; i < listeners.length; i++) {
//       const listener = listeners[i];
//       listener();
//     }
//   };

//   function getState() {
//     return state;
//   }

//   return {
//     subscribe,
//     changeState,
//     getState
//   }
// };

// let initState = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: '',
//     description: ''
//   }
// }

// let { 
//   subscribe,
//   changeState,
//   getState
// } = createStore(initState);

// subscribe(() => {
//   let state = getState();
//   console.log(`${state.info.name}：${state.info.description}`);
// });
// subscribe(() => {
//   let state = getState();
//   console.log(state.counter.count);
// });

// changeState({
//   ...getState(),
//   info: {
//     name: 'fuck',
//     description: 'you'
//   }
// });

// changeState({
//   ...getState(),
//   counter: {
//     count: 1
//   }
// });

// 初步实现reducer/dispatch
// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     default:
//       return state;
//   }
// };

// function createStore(initState) {
//   let state = initState;
//   let listeners = [];

//   function subscribe(listener) {
//     listeners.push(listener);
//   }

//   function dispatch(action) {
//     state = reducer(state, action);

//     for(let i = 0; i < listeners.length; i++) {
//       const listener = listeners[i];
//       listener();
//     }
//   }

//   function getState() {
//     return state;
//   }

//   return {
//     subscribe,
//     dispatch,
//     getState
//   } 
// };

// let initState = {
//   count: 1
// };

// let {
//   subscribe,
//   dispatch,
//   getState
// } = createStore(initState);

// subscribe(() => {
//   let state = getState();
//   console.log(state.count);
// });

// dispatch({ type: 'INCREMENT' });
// dispatch({ type: 'DECREMENT' });


// combineReducers 函数来把多个 reducer 函数合并成一个 reducer 函数
// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     default:
//       return state;
//   }
// };
// function InfoReducer(state, action) {
//   switch (action.type) {
//     case 'SET_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//     case 'SET_DESCRIPTION':
//       return {
//         ...state,
//         description: action.description
//       }
//     default:
//       return state;
//   }
// };

// const reducer = combineReducers({
//   counter: counterReducer,
//   info: InfoReducer
// });

// function combineReducers(reducers) {
//   const reducerKeys = Object.keys(reducers);

//   return (state = {}, action) => {
//     const nextStates = {};
//     reducerKeys.forEach(key => {
//       const previousState = state[key];

//       const nextState = reducers[key](previousState, action);

//       nextStates[key] = nextState;
//     })
//     return nextStates;
//   }

// }

// function createStore(reducer, initState) {
//   let state = initState;
//   let listeners = [];

//   function subscribe(listener) {
//     listeners.push(listener);
//   }

//   function dispatch(action) {
//     state = reducer(state, action);

//     for(let i = 0; i < listeners.length; i++) {
//       const listener = listeners[i];
//       listener();
//     }
//   }

//   function getState() {
//     return state;
//   }

//   return {
//     subscribe,
//     dispatch,
//     getState
//   } 
// };

// let initState = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: 'wang',
//     description: '???'
//   }
// };

// let {
//   subscribe,
//   dispatch,
//   getState
// } = createStore(reducer, initState);

// subscribe(() => {
//   let state = getState();
//   console.log(state.counter.count, state.info.name, state.info.description);
// });

// /*自增*/
// dispatch({
//   type: 'INCREMENT'
// });

// /*修改 name*/
// dispatch({
//   type: 'SET_NAME',
//   name: 'xuan'
// });

// 拆分state
// 分离state
// let initState = {
//   count: 1
// };

// function reducer(state, action) {
//   if (!state) {
//     state = initState;
//   }
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1
//       }
//     default:    
//       return state;
//   }
// }

// function createStore(reducer, initState) {
//   let state = initState;
//   let listeners = [];

//   function subscribe(listener) {
//     listeners.push(listener);
//   }
//   function dispatch(action) {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   }
//   function getState() {
//     return state;
//   }

//   dispatch({ type: Symbol() });

//   return {
//     subscribe,
//     dispatch,
//     getState
//   }
// };

// /*这里没有传 initState 哦 */
// const store = createStore(reducer);
// /*这里看看初始化的 state 是什么*/
// console.log(store.getState());

