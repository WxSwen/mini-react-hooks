# [React](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React use hooks.

### useEffect 完整指南

[useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

#### 1. useEffect 会捕获 props 和 state。所以即便在回调函数里，你拿到的还是初始的 props 和 state。如果你想得到“最新”的值，你可以使用 ref

#### 2. []表示 effect 没有使用任何 React 数据流里的值，因此该 effect 仅被调用一次是安全的。[]同样也是一类常见问题的来源，也即你以为没使用数据流里的值但其实使用了

### 编写有弹性的组件

[编写有弹性的组件](https://overreacted.io/zh-hans/writing-resilient-components/)

### How to fetch data with React Hooks?

[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)
