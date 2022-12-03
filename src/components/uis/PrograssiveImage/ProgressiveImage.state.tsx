import { useState } from 'react';

export const useProgressiveImageState = () => {
  const [highResoImgLoaded, setHighResoImgLoaded] = useState(false);

  const highResoImgOnLoad = () => {
    setHighResoImgLoaded(true);
  };

  return { highResoImgOnLoad, highResoImgLoaded };
};
