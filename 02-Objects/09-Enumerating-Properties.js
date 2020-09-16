function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// We can use the for in loop to enumerate over an object
// In every iteration, "key" will hold the value of a key from the object and returns both names of the properties
for (let key in circle) {
  console.log("Keys: ", key);
}

// If we want to access the values with the property names, use bracket notation with the object
for (let key in circle) {
  console.log("Keys with values: ", key, circle[key]);
}

// Only the properties and NOT the methods
for (let key in circle) {
  if (typeof circle[key] !== "function")
    console.log("Properties w/ no methods: ", key, circle[key]);
}

// Using Object.keys() method, returns all the keys as an array
// Can not seperate properties from methods
const keys = Object.keys(circle);
console.log("Object.keys():", keys);

// Check to see if an object has certain properties
if ("radius" in circle)
  console.log("Check for properties: ", "Circle has a radius");
