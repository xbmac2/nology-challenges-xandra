// Challenge: Listing Hobbies
// MVP
// Create an array with 3 of your hobbies
// Print in the console the first hobby in the array
// Remove that first hobby from the array and store that hobby in a variable
// Store the length of the array in a variable
// Add another hobby at the end of the array
// Print that last hobby in the console
// Bonus:

// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")

const myHobbies = ["reading", "running", "visiting art galleries"]
console.log(myHobbies[0]);

const shifted = myHobbies.shift();
const hobbiesLength = myHobbies.length;

myHobbies.push("pilates");
console.log(myHobbies[myHobbies.length - 1]);

console.log("My hobbies are: " + myHobbies.join(", "));

//myHobbies.push(myHobbies.shift());


// Challenge: Grocery Lists
// MVP
// Create an array containing 5 grocery items you often buy
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

const groceryList = ["milk", "eggs", "bread", "chicken", "spinach"]
console.log(groceryList.join("|"));