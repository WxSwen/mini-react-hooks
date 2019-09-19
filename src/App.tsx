import * as React from 'react';
import './App.css';
import useCustom from './package/useReducerHook/useReducerHook';

const Counter = () => {
  const [globalState, setGlobalState] = useCustom();

  const add1Global = () => {
    const newCounterValue = 'red';
    setGlobalState({ color: newCounterValue });
  }

  return (
    <div>
      <p>
        次数：
        { globalState.color }
      </p>
      <button type="button" onClick={add1Global}>
        + 1
      </button>
    </div>
  )
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
