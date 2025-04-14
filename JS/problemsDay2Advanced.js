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

let celsiusValue = 20;
let fahrenheitValue = convertToFahrenheit(celsiusValue);

console.log ('${celsiusValue} is equal to ${fahrenheitValue}');

console.log(`Data type of Celsius input: ${typeof celsiusValue}`);
console.log(`Data type of Fahrenheit result: ${typeof fahrenheitValue}`);