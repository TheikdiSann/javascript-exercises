const add = function(num1, num2) {
  if(typeof(num1) === "number" && typeof(num2) === "number") {
    return num1 + num2
  }else{
    return "ERROR"
  } 
};

const subtract = function(num1, num2) {
	if(typeof(num1) === "number" && typeof(num2) === "number") {
    return num1 - num2
  }else{
    return "ERROR"
  }
};

const sum = function(array) {

  let total = 0;
  array.forEach((value) =>{
    total += value
  } );
	
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach((value) => {
    total *= value
  });

  return total;
};

const power = function(num, power) {
	let total = 1;
  for(let i = 1; i <= power; i++){
    total *= num
  };

  return total;
};

const factorial = function(num) {
	if(num === 0)return 1;

  let total = 1;
  for (let i = num; i > 0; i--){
    total *= i
  };

  return total;
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
