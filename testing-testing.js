// const playersArr = ["Tony","John","Dave"];
// const scoresArr = [45,55,66];

// if (playersArr.length !== scoresArr.length || playersArr.length === 0 || scoresArr.length === 0) {
//   console.log("invalid inputs");
// }

// let combinedArr = [];

// for (let i = 0; i < playersArr.length; i++) {
//   combinedArr.push(`P:${i + 1} ${playersArr[i]} scored ${scoresArr[i]}`);
// }


// console.log(combinedArr);

const toEncrypt = 'encrypted';

const makeArr = toEncrypt.split(""); //string is array now
let list1 =[];
let list2 = [];
let list3 = [];

for (let i = 0; i < makeArr.length; i += 3) {
  list1.push(makeArr[i]);
}
for (let i = 1; i < makeArr.length; i += 3) {
  list2.push(makeArr[i]);
}
for (let i = 2; i < makeArr.length; i += 3) {
  list3.push(makeArr[i]);
}

console.log(list1.join("") + list2.join("") + list3.join(""));