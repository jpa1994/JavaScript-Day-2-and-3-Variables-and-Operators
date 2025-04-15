// Day 2
// Advanced Problems
// Problem 1: Simple User Greeting

let firstNameU = "John";
let ageU = 31;
let isStudentU = true;
let greetingU = `Hello, my name is ${firstNameU}, I am ${ageU} years old, and it is ${isStudentU} that I am a student.`;

console.log(greetingU);
console.log(typeof firstNameU);
console.log(typeof ageU);
console.log(typeof isStudentU);

// Problem 2: Tempurature Converter

function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let celsius = 25;
let fahrenheit = convertToFahrenheit(celsius);

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

console.log(`Data type of Celsius input: ${typeof celsius}`);
console.log(`Data type of Fahrenheit result: ${typeof fahrenheit}`);

// Problem 3: Discount Calculator

let price1 = 50;
let price2 = 35;
let price3 = 20;

let discountThreshold = 70; // Minimum total for discount
let discount = 20; // Discount

let total = price1 + price2 + price3;

if (total >= discountThreshold) {
    total -= discount;
}

let finalMessage = `Original total: $${price1 + price2 + price3}, Final total after discount: $${total}`;

console.log(finalMessage);
console.log(typeof total);