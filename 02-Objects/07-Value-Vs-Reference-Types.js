// Value types (Primitives) - Number, string, boolean, symbol, undefined, null
// Reference types - Objects, functions (also objects), array (also objects)

// How primitives and objects are different
// Primitives and copied by their value and objects are copied by their reference

// Variables hold the values assigned to them and are independent from each other
let x = 10;
// y is referencing the value of x, which is 10
let y = x;
// assigning a new value of 20 will not change the first variables value so y will keep referencing 10
x = 20;

// When using objects, the value is NOT stored within the variable
// The object is stored somewhere else in memory and the address of that memory location is stored inside that variable
// When we copy a into b, it's the address of the reference that is copied
// In other words, both a and b are pointing to the same object in memory
let a = { value: 10 };
let b = a;
a.value = 20;

// Using a primitive type, the global number variable operates independently from the number variable inside the function
// While the function scoped variable is set to increment by 1, it gets garbage collected when the function terminates
let number = 10;
function numIncrease(number) {
  return number++;
}
increase(number);
console.log(number);

// Using a reference type, both variables point to the same reference at the memory address of the value
let object = { value: 10 };
function increase(object) {
  return object.value++;
}
increase(object);
console.log(object);
