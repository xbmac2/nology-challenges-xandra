//Good to go
//
const arr = [];
while (arr.length < 10) {
  const r = Math.floor(Math.random() * 14);
  if (arr.indexOf(r) === -1) {
    arr.push(r);
  }
}

console.log(arr);

function work(howMany, range) {
  const arr = [];
  while (arr.length < howMany) {
    const r = Math.floor(Math.random() * range);
    arr.push(r);
  // if (arr.indexOf(r) === -1) {
    
  // }
}
}
console.log(work(10, 20));

///NEXT CHALENGE

// NOTGood to go
// function generateNumbers(howMany, range) {
//   const arr = [];
// while (arr.length < howMany) {
//   const r = Math.floor(Math.random() * range);
//   if (arr.indexOf(r) === -1) {
//     arr.push(r);
//   }
// }
// }



// console.log(generateNumbers(10, 20));



// function generateNumbers(n, r) {
//   const generatedNums = [];

//   while (generatedNums.length < n) {
//     const number = Math.floor(Math.random() * r);

//     // if (arr.indexOf(r) === -1)
//     generatedNums.push(number);
//   }
// }

// console.log(generateNumbers(10, 20));



// Create a function that returns a list of random whole numbers given a range

// isUnique = true;
// function generateNumbers(n, r, isUnique) {
//   const tmp = [];

//   while (tmp.length < n) {
//     const randomNumber = Math.floor(Math.random() * r);
//     if (isUnique === true && !tmp.includes(randomNumber)) {
//       tmp.push(randomNumber);
//      } else if (isUnique === false) {
//       tmp.push(randomNumber);
// }
// }
// }
// console.log(generateNumbers(10, 20));
  

// Create a function called generateNumbers
// This function should take in 2 numbers
// n being the number of numbers to be generated
// r being the max range
// E.g: n: 10, r: 20: function will generate 10 random numbers between 0 and 20
// Function should return n numbers in range 0 <= n < r