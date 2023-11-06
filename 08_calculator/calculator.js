const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accum, initValue)=> accum + initValue, 0);
};

const multiply = function(array) {
  return array.reduce((accum, initValue)=> accum * initValue, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
  // create sequential array to 1
  let array = Array.from({length:num+1}, (_,i) => num-i);
  // change last index in array to 1
  array[num] = 1;    
  // multiply with reduce
  return array.reduce((accum, initValue) => accum * initValue, 1);

};

//Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

