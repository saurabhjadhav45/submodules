import {useEffect, useRef} from 'react';

const useClickOutSide = (handler: () => void) => {
  const domNode = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as HTMLElement)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => document.removeEventListener('mousedown', maybeHandler);
  }, [handler]);
  return domNode;
};

export default useClickOutSide;
