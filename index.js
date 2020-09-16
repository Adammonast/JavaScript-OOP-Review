// We can not access private properties outside of the object

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  // To be able to read the private properties somewhere in the application, create an inner to display it
  // The closure of the function includes all the variables defined in the executing function as well as all the variables defined in the parent functions
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  // Built-in Object method has an additional method called defineProperties()
  // First argument is the object we want to add new properties to. The object passed in is what "this" references
  // Second argument is the name of th property we're adding
  // Third argument is an object that takes a get and function
  // Default location is a read only property
  Object.defineProperty(this, "defaultLocation", {
    // A getter is function used to read a property
    get: function () {
      // This variable is part of the closure of the inner function so we can access it
      return defaultLocation;
    },
    // Define a setter to manipulate the value of the hidden property
    set: function (value) {
      // Benefits of setters are that we can perform validation before setting the value
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.draw();
// Now we can call:
circle.getDefaultLocation();
// Now we can change the location:
// Throws the error we created
circle.defaultLocation = 1;
