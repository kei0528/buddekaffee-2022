import VanillaTilt from 'vanilla-tilt';
import { RefObject, useEffect } from 'react';
import { isTouchDevice } from 'src/utils/isTouchDevice';

export const useTiltEffect = ({ ref }: { ref: RefObject<any> }) => {
  useEffect(() => {
    let elm = ref.current;
    if (!elm || isTouchDevice) return;
    VanillaTilt.init(ref.current, {
      max: 10,
      scale: 1,
      glare: false,
      transition: true,
      gyroscope: true,
      speed: 1000,
      perspective: 2000
    });

    return () => (elm = undefined);
  }, [ref]);

  return;
};
