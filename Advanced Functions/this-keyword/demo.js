// 1. function Invocation

function sum(a, b) {
  console.log(this === window); // => true
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}
// sum() is invoked as a function
// this in sum() is a global object (window)
sum(15, 16);     // => 31
window.myNumber; // => 20


// 2. Outside any function scope

this.myString = 'Hello World!';
console.log(window.myString); // => 'Hello World!'

// 2.1 In an inner Function 

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {        
    console.log(this === numbers); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === numbers); // => false
      return this.numberA + this.numberB;
    }
    return calculate();    // Function Invocation not a method invocation
  }
};
numbers.sum(); // => NaN or throws TypeError in strict mode


// 2.2 Inner Function with changed context

// Indirect Call
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    function calculate() {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    // use .call() method to modify the context
    return calculate.call(this);
  }
};
numbers.sum(); // => 15

// Arrow function
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    const calculate = () => {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
numbers.sum(); // => 15


// 3. Method Invocation

const calc = {
  num: 0,
  increment() {
    console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  }
};
// method invocation. this is calc
calc.increment(); // => 1
calc.increment(); // => 2


// 4. Constructor Invocation

function Foo () {
  // this is fooInstance
  this.property = 'Default Value';
}
// Constructor invocation
const fooInstance = new Foo();
fooInstance.property; // => 'Default Value'
