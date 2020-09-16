// Object literal syntax
// An object in JS is essential a collection of key value pairs
// Key value pairs can be integers, strings, other objects, and functions
// Variables within an object are referred to as properties
// Functions within an object are referred to as methods
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
