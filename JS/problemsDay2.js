// Day 2
// Problem 1: Variable Declarations

var age = 31;
console.log(age); // 31
let firstName = "John";
console.log(firstName); // John
const is_Student = true;
console.log(is_Student); // true

// Problem 2: Exploring Data Types

let tempuratures = 80.5;
console.log(typeof tempuratures); // number
let greetings = "Hello, World!";
console.log(typeof greetings); // string
let is_LoggedIn = true;
console.log(typeof is_LoggedIn); // boolean
let emptyValue = null;
console.log(typeof emptyValue); // object
let notDefined;
console.log(typeof notDefined); // undefined
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol

// Problem 3: Variable Scope

let ages = 29; // Global Variable

function displayAges() {
    let localAges = 31; // Local Variable
    console.log("Local Ages:", localAges); // Local Ages: 31
}

displayAges();
console.log("Global Ages", ages); // Global Ages: 29
console.log(localAges); // Output: ReferenceError: localAges is not defined