// add function
const add = (a, b) => {
    // ex: add(3, 5) should return 8
    return a + b; // return the result
  };
  
  // subtract function
  const subtract = (a, b) => {
    // ex: subtract(5, 9) should return -4
    return a - b; // return the result
  };
  
  // multiply function
  const multiply = (a, b) => {
    // ex: multiply(12, 9) should return 108
    return a * b; // return the result
  };
  
  // divide function
  const divide = (a, b) => {
    // ex: divide(55, 5) should return 11
    if (b === 0) throw new Error("Division by zero is not allowed");
    return a / b; // return the result
  };
  
  // modulas function
  const modulas = (a, b) => {
    // ex: modulas(17, 4) should return 1
    return a % b; // return the result
  };
  
  // power function
  const power = (a, b) => {
    // ex: power(2, 5) should return 32
    return Math.pow(a, b); // return the result
  };
  
  // square function
  const squareRoot = (a) => {
    // Make sure that squareRoot a negative number should throw an error
    if (a < 0) throw new Error("Square root of a negative number is not allowed");
    return Math.sqrt(a); // return the result
  };
  
  // floor function
  const floor = (a) => {
    // ex: floor(15.3) should return 15
    return Math.floor(a); // return the result
  };
  
  // ceiling function
  const ceiling = (a) => {
    // ex: ceiling(15.3) should return 16
    return Math.ceil(a); // return the result
  };
  
  ////////////////////////////////////////
  
  // export functions
  // Please do not change the following line.
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
  };