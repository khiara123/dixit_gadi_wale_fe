const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
}


const  detectDevice = () => {
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
  const width = window.innerWidth;

  if (isMobile || width <= 768) return "Mobile";
  else if (width <= 1024) return "Tablet or Small Laptop";
  else return "Desktop";
}

const capitalize = (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
}


const util = {debounce, detectDevice, capitalize}
export default util