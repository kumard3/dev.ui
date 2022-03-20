import { MutableRefObject, useEffect } from 'react';

// https://usehooks.com/useOnClickOutside/

const useOnClickOutside = (ref:any, handler:any ) => {
  useEffect(
    () => {
      const listener = (event: { target: any; }):any => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },

    [ref, handler],
  );
};

export default useOnClickOutside;
