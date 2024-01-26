
export function debounce(func:any, delay:any) {
    let timeoutId:any;
    return function (...args:any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }