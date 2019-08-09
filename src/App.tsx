import * as React from 'react';
import './App.css';
import useThrottle from './package/useThrottle';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const throttledValue = useThrottle(value, 2000);
  const [lastThrottledValue, setLastThrottledValue] = React.useState(throttledValue);

  React.useEffect(() => {
    if (lastThrottledValue !== throttledValue) {
      setLastThrottledValue(throttledValue);
    }
  });

  return (
    <div style={{ width: 300, margin: '40px auto' }}>
      <input
        type="text"
        value={value}
        placeholder="Throttled input"
        style={{ width: '100%' }}
        onChange={({ currentTarget }) => {
          setValue(currentTarget.value);
        }}
      />
      <br />
      <br />
      <div>Throttled value: {throttledValue}</div>
    </div>
  );
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
