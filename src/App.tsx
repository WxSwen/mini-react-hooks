import * as React from 'react';
import './App.css';

function Example() {
  const [count, setCount] = React.useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Example></Example>
      </div>
    );
  }
}

export default App;
