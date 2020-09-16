// All functions in JS are objects!
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// There are many built-in methods avaliable for constructor functions
console.log(Circle.name); // --> returns the name of the function
console.log(Circle.length); // --> returns the number of arguments
const circle = new Circle(1);

// Every object in JS has a constructor property and that references the function that was used to create that object
console.log(Circle.constructor);
// When functions are declared using this syntax, internally JS engine will use the Function() constructor to create that object
const Circle2 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };`
);
const circle2 = new Circle2(1);

// Using the call() method produces the exact same results as line 24
// Pass in an empty object to have "this" reference that object and then the number of parameters needed
Circle2.call({}, 1);
// apply() produces the same result as well, but you have to pass the parameters as an array
// Useful if you already have an array in the code
Circle2.apply({}, [1, 2, 3]);
