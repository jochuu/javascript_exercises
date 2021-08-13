const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  if (array.length === 0) return 0;
  return array.reduce((totalValue, currentItem) => totalValue + currentItem);
};

const multiply = function(array) {
  if (array.length === 0) return 0;
  return array.reduce((totalValue, currentItem) => totalValue * currentItem);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  let product = 1;
  if (number === 0) return product;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
