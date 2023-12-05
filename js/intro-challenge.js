typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: undefined //actually number
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: boolean
"hamburger" + "s"; // Prediction: hamburgers
"hamburgers" - "s"; // Prediction: hamburger //actually NaN
// strings can add, but not subtract
"1" + "3"; // Prediction: 4 // actually 13
//need to convert number to string to do maths
"1" - "3"; // Prediction: -2
//converts values in strings to numbers; adding is different
"johnny" + 5; // Prediction: johnny5
//5 gets converted to string
"johnny" - 5; // Prediction: undefined //actually NaN
99 * "luftbaloons"; // Prediction: undefined //actually NaN


const firstName = "Xandra";
const lastName = "Macatangay";
let age = "25";
console.log(`Hi, my name is ${firstName} ${lastName} and I am ${age} years old.`)

console.log(3 && "Calum" && ("" || 26))

2 == "2"; //true
2 === 2; //true
2 === "2"; //false
"2" + 3 == 23; //true
"2" + 3 === 5; //false
10 % 3; //1
10 % 3 === 1; //true
(100 % 7) % 5; // 2 % 5 = 2 
(100 % 7) % 5 !== 0; //true
(100 % 7) % 9 == 2; // 2 % 9 = 2 //true
!(10 % 2); //true
!!!!((10 % 7) % 3); //0; false
10 % 3 === -1 % 2; //false

(892783 != "89278" + 3) == 0; //actually TRUE false actually TRUE
true && false; //false
false || true; //true
true || false; //true
true || false; //true
true || false + true; //true
true * false && false + true; //0
10 && 123 && -1 && 3; //3
10 && 123 && 0 && 3; //0
(10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; //10 && 123 && NaN || 0 //NaN //actually 0
3 && "Calum" && ("" || 26); //26
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog"));//CatDog

// console.log((892783 != "89278" + 3));
// console.log(true && false);
// console.log(false || true);
// console.log(true || false);
// console.log(true || false);
// console.log(true || false + true);
// console.log(true * false && false + true);
// console.log(10 && 123 && -1 && 3);
// console.log(10 && 123 && 0 && 3);
// console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1);
// console.log(3 && "Calum" && ("" || 26));
// console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")));
console.log((892783 != "89278" + 3));