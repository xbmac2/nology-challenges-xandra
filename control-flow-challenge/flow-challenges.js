const n = 4;

if (n % 2 === 0) {
  console.log("n is even");
} else {
  console.log("n is odd");
}

// Challenge: Comparing Numbers
// MVP:
// Check for the smallest value
// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y

const x = 500;
const y = 50;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is smaller than ${y}`);
}




// Challenge: User Input Type
// MVP:
// Console log the user's input depending on the data type
// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say "invalid input"

const userInput = "Xandra";

 if (typeof userInput === "number") {
  console.log(userInput ** 2);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("invalid input");
}

// if (typeof userInput === "number" && !isNaN(userInput))