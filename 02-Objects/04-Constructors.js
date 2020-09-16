// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor function
// Naming convention used for constructors is different. First letter should be capitalized
function Circle(radius) {
  // Use the "this" keyword to set the properties
  // "This" references the object that is executing the block of code
  this.radius = radius;
  // Use "this" to create new properties as well
  this.draw = function () {
    console.log("draw");
  };
}

// Using the "new" keyword operator creates an empty object
// Then sets "this" to point at that object because "this" originally points to the global window object in browsers
// Finally, it returns that object from the function executing the code. Returning this will happen automatically when usin the new operator
const circle2 = new Circle(1);
