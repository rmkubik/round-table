import { useRef, useEffect } from "react";

const pickRandom = array => array[Math.floor(Math.random() * array.length)];
const between = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isPositive = number => number > 0;

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export { between, pickRandom, isPositive, usePrevious };
