import * as React from 'react';
import './App.css';
import useMountedState from './package/useMountedState'; 

const Demo = () => {
  const isMounted = useMountedState();
  const [state, useState] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        useState(isMounted());
      } else {
        useState(isMounted());
      }
    }, 1000);
  }, []);

  return (
    <div>{state ? '1' : '2'}</div>
  )
};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Demo></Demo>
      </div>
    );
  }
}

export default App;
