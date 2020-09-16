// OOP is made up of four "pillar" principles
// 1) Encapsulation - Grouping related variables and functions that operate on them
// 2) Abstraction
// 3) Inheritance - Mechanism that allows us to elminate redundant code
// 4) Polymorphism - A technique that allows us to ge rid of long if/else or switch/case statements

// Taking an OOP approach, we combine a group of related variables and functions into a unit
// That unit is an object
// The variables are properties
// The functions are methods

/* example) Car ---> Object

make------|
model-----|---> Properties
color-----| 

start()---|
stop()----|----> Methods
move()----| 

*/

// Encapsulation example - Convert factory (procedurial) function to OOP function:
// "The best functions are those with no parameters!"
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}

const employee = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overTime * this.rate;
  },
};

employee.getWage(40000, 15, 35);
