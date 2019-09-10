import { useEffect } from 'react';

const useBeforeUnload = (enabled: boolean = true, message?: string) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handler = (event: BeforeUnloadEvent) => {
      event.preventDefault();

      if (message) {
        event.returnValue = message;
      }

      return message;
    };

    window.addEventListener('beforeunload', handler);

    return () => window.removeEventListener('beforeunload', handler);
  }, [message, enabled]);
}

// const Demo = () => {
//   const [dirty, toggleDirty] = useToggle(false);
//   useBeforeUnload(dirty, 'You have unsaved changes, are you sure?');

//   return (
//     <div>
//       {dirty && <p>Try to reload or close tab</p>}
//       <button onClick={() => toggleDirty()}>{dirty ? 'Disable' : 'Enable'}</button>
//     </div>
//   );
// };