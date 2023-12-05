// Challenge: Tell me the day!
// MVP:
// Create a switch block that will log a string for each day of the week.
// Create a variable called day
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range


const day = 7;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday")
    break;
  case 6:
    console.log("Today is Saturday")
    break;
  case 7:
    console.log("Today is Sunday")
    break;
  default:
    console.log("Invalid number");
}


// MVP:
// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference
// Bonus:
// Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

const parent1 = "blue";
const parent2 = "brown";

switch (parent1) {
  case "Brown":
  case "brown":
    switch (parent2) {
      case "brown":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 75%, green is 18.75%, and blue is 6.25%`)
        break;
      case "green":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 37.5%, and blue is 12.5%`)
        break;
      case "blue":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 0%, and blue is 50%`)
        
    } break;
  case "green":
    switch (parent2) {
      case "green":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is less than 1%, green is 75%, and blue is 5%`)
        break;
      case "brown":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 37.5%, and blue is 12.5%`)
        break;
      case "blue":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 50%, and blue is 50%`)
        
    } break;
  case "blue":
    switch (parent2) {
      case "brown":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 0%, and blue is 50%`)
        break;
      case "green":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 50%, and blue is 50%`)
        break;
      case "blue":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 1%, and blue is 99%`)
        
      } break;
  default:
    console.log("Invalid eye colours");
}


const child = "brown";
switch (child) {
  case "brown":
    console.log("My favourite eye colour");
    break;
  case "blue":
    console.log("My least favourite eye colour");
    break;
  case "green":
    console.log("Mediocore colour");
    break;
  default:
    console.log("Invalid eye colour")
}