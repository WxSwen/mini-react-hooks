import * as React from 'react';
import './App.css';
import { useUnmount } from 'react-use';


const Counter = () => {
  const Demo = () => {
    useUnmount(() => alert('UNMOUNTED'));
    return null;
  };

  return (
    <div>
      <Demo></Demo>
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
