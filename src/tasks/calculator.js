const operations = {
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));
