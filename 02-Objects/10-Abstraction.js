// In OOP, there is a core concept called Abstraction
// Abstraction means that we should hide the details/complexity and show the essentials

function Circle(radius) {
  // Essential method
  this.radius = radius;

  // This method should be hidden
  this.defaultLocation = { x: 0, y: 0 };

  // This method should be hidden
  this.computeOptimumLocation = function () {
    //...
  };

  // Essential method
  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(10);
