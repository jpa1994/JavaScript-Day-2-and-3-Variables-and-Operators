// Day 3
// Problem 1: Simple Arithmetic Problems

let num1 = 15;
let num2 = 20;

let sums = num1 + num2;
console.log("Sum :", sums); // 35
let differences = num1 - num2;
console.log("Differnece: ", differences); // -5
let products = num1 * num2;
console.log("Product :", products); // 300
let quotients = num1 / num2;
console.log("Quotient :", quotients); // 0.75
let remainders = num1 % num2;
console.log("Remainder :",remainders); // 15
num1++
num2--
console.log("Increment", num1) // 16
console.log("Decrement", num2) // 19

// Problem 2: Variable Assignment Operations

let score = 50;

score += 25;
score *= 2;
score -=30;
console.log("Final Score :", score); // 120

// Problem 3: Comparing Values

let a = 10;
let b = "10";

let comparison1 = a == b;
console.log("a == b:", comparison1); // true
let comparison2 = a === b;
console.log("a === b:", comparison2); // false
let comparison3 = a > 5 && a < 15;
console.log("a > 5 && a < 15:", comparison3); // true