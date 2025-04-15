// Day 3
// Advanced Problems
// Problem 1: Salary Adjuster

let baseSalary = 3000;
console.log("Base Salary:", baseSalary);
let bonusPercentage = 0.10;
let deduction = 150;

let bonus = baseSalary * bonusPercentage;
console.log ("Base Bonus:", bonus);
baseSalary += bonus;
console.log("Salary with Bonus:", baseSalary);
baseSalary -= deduction;
console.log("Salary with Deduction:", baseSalary);
let x = 50;
baseSalary += x;
console.log("Salary with Increment:", baseSalary);

    // Conditional if else, is salary more than threshold

if (baseSalary > 3500) {
    console.log("Good");

} else {
        console.log("Needs Improvement");
}

// Problem 2: Shopping Cart Total

let item1 = 45;
let item2 = 30;
let item3 = 25;
let item4 = 20;
let totals = 0;
let discountThresholds = 100;
let discountAmount = 10;

totals += item1;
totals += item2;
totals += item3;
totals += item4;
console.log("Total:", totals)

    // Conditional if else, is total high enough for a discount

if (totals >= discountThresholds) {
    console.log("Discount: Yes", discountAmount);
    console.log("Final Total:", totals -= discountAmount);
} else {
    console.log("Discount: No");
    console.log("Final Total:", totals);
}

// Problem 3: Quiz Score Tracker

let correctAnswers = 0;
let userAnswers = ['A', 'B', 'C', 'D'];
let expectedAnswers = ['A', 'C', 'C', 'D'];

    // Compare Awnsers

for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === expectedAnswers[i]) {
        correctAnswers++;
    }
}

    // Calculate Final Score
let totalQuestions = userAnswers.length;
let scorePercentage = (correctAnswers / totalQuestions) * 100;

    // Pass or Failing Score

let passMark = 70;
let resultMessage = scorePercentage >= passMark ? "Passed" : "Failed";

console.log(`Correct Answers: ${correctAnswers}`);
console.log(`Score Percentage: ${scorePercentage}%`);
console.log(`You ${resultMessage} the quiz`);