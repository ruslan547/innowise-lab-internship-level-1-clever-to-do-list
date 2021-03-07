import { useRef, useCallback } from 'react';

const TIMEOUT_DELAY = 1000;

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper(...rest) {
    if (isThrottled) {
      savedArgs = rest;
      savedThis = this;
      return;
    }

    func.apply(this, rest);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

const useLazyLoading = ({ onIntersection, delay = TIMEOUT_DELAY }) => {
  const containerRef = useRef(null);

  const onScroll = useCallback(
    throttle(() => {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft === maxScrollLeft) {
        onIntersection();
      }
    }, delay),
    [onIntersection, containerRef, delay],
  );

  return [onScroll, containerRef];
};

export default useLazyLoading;
