import { RefObject, useEffect } from 'react';

export const useElementOnVisible = ({ ref, callback, threshold = 0.8 }: { ref: RefObject<any>; callback: (elm: HTMLElement) => void; threshold?: number }) => {
  useEffect(() => {
    if (ref.current === null) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio > threshold) {
          callback(ref.current);
        }
      },
      { root: null, rootMargin: '0px', threshold }
    );
    io.observe(ref.current);

    return () => {
      io.disconnect();
    };
  }, [ref, callback, threshold]);

  return;
};
