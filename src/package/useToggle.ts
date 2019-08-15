import { useCallback, useState } from 'react';

const useToggle = (initValue: boolean): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useState(initValue);
  
  const toggle = useCallback(
    (nextValue?: any) => {
      if (typeof nextValue === 'boolean') {
        setValue(nextValue);
      } else {
        // currentValue => value ? 
        // setValue(value => !value);
        setValue(currentValue => !currentValue);
      }
    }, [setValue]
  )

  return [value, toggle];
}

export default useToggle;

// const Demo = () => {
//   const [on, toggle] = useToggle(true);

//   return (
//     <div>
//       <div>{on ? 'ON' : 'OFF'}</div>
//       <button onClick={toggle}>Toggle</button>
//       <button onClick={() => toggle(true)}>set ON</button>
//       <button onClick={() => toggle(false)}>set OFF</button>
//     </div>
//   );
// };