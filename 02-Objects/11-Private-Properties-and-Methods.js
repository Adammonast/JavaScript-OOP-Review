// Since "this" references the object currently executing the code block, variables declared without "this" are garbage collected after the function runs
// Use function scoped variables to create private properties

function Circle(radius) {
  this.radius = radius;

  // Private properties
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    //...
  };

  this.draw = function () {
    // Since computeOptimumLocation is a functional scoped function, we access it using regular function invokation
    // Works because JS uses closures (determines what variable are avaiable in an inner function)
    // The local variables declared inside the Circle object will still exist after the function executes and garbage collects so we can call them every instance of draw()
    computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const circle = new Circle(10);
