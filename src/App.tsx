import * as React from "react";
import "./App.css";
import useInterval from "./package/useInterval";

function Counter() {
  const [count, setCount] = React.useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
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
