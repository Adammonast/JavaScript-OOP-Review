function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log(draw);
    });
}

const circle = new Circle(10);

// Objects are dynamic so we can add or delete properties within them
circle.location = { x: 1 };
// We can also use bracket notation to perform the same task
circle["location"] = { x: 1 };
// Useful in certain scenearios, when you don't know the name of a value yet, or invalid property names
const propertyName = "center location";
circle[propertyName] = { x: 1 };

// Can also delete properties from an object
// Use the delete operator and reference the property name
delete circle.location;
// Can use bracket notation as well
delete circle["location"];
