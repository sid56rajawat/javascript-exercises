const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = function(array) {
	return array.reduce((total,item) => total + item,0);
};

const multiply = function() {
  let array = [...arguments];
	return array.reduce((total,item) => total * item,1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
	let ans = 1;
  while(n > 0){
    ans *= n;
    n--;
  }
  return ans;
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
