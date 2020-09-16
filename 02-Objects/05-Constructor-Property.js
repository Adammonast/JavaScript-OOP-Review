// Every object in JS has a property called constructor and it references the function that was used to construct or create that object
// When we create an object using the object literal syntax, interanlly the JS uses the built-in constructor function

let x = {}; // The JS translate that object literal to ---> let x = new Object();

// In JS, there are more built-in constructor functions:
new String(); // --> '', "", ``
new Boolean(); // --> true, false=
new Number(); // --> 1, 2, 3, ...
