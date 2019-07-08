const pickRandom = array => array[Math.floor(Math.random() * array.length)];
const between = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isPositive = number => number > 0;

export { between, pickRandom, isPositive };
