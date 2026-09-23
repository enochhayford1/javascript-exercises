const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	if (arr.length == 0) return 0;
  return arr.reduce((total, current) => total + current)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	if (num == 0) return 1;
  
  let result = num;

  for (let i = num-1; i > 1; i--) {
    result = result * i; 
  }
  return result;
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
