const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {

	let sum = 0;
  array.forEach(x => {
    sum += x;
  });

  return sum;

};

const multiply = function(array) {

  let prod = 1;

  array.forEach(x => {
    prod *= x;
  });

  return prod;

};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(a) {

  let prod = 1;
  for (let i = 1; i <= a; i++) {
    prod *= i;
  }

  return prod;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
