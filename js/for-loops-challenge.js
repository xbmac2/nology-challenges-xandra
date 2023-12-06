// Challenge: Sum of n
// MVP:
// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result
// sum(10) => 55


function sumOfN(n) {
  let total = 0;

  for (let i = 0; i <= n; ++i) {
    total += i;
  }
  return total;
}

console.log(sumOfN(10));

// Bonus:
// Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

// arithmetic sum

function noLoopSum(n) {
  let total = 0;
  total = (n/2) * (1+n);
  console.log(total);
}

noLoopSum(10);