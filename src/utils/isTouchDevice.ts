export const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
