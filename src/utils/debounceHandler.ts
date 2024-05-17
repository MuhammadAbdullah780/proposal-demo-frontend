export const debounceHandler = (callback: Function, delay: number) => {
  let timerId: any = null;
  console.log("DEBOUNCE__HANDLER___CALLED");

  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
};
