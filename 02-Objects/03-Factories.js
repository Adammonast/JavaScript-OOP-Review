// Object literal syntax is not a good way to create an object and duplicate it, especially if it has more than one method
// If an object has more than one method, that object has "behavior"
// Use a factory or constructor function to duplicate objects with  behavior

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// Creates a new circle object with a radius of 1
const circle = createCircle(1);
circle.draw();
