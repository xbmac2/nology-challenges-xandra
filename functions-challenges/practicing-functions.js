function moonOrbits(earthDays) {
  return Number((earthDays / 27.3).toFixed(3));
}

console.log(moonOrbits(54));

function circleArea(radius) {
  return Math.PI * (radius ** 2);
}

console.log(circleArea(10));

function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}

console.log(circlePerimeter(10));

function ageInDays(ageYears) {
  return ageYears * 365;
}

console.log(ageInDays(32));

function ageInSeconds(ageYears) {
  return ageYears * 365 * 86400;
}

console.log(ageInSeconds(32));

function remainder(dividend, divisor) {
  return dividend % divisor;
}

console.log(remainder(5, 5));

function calculatePoints(twoPointers, threePointers) {
  return (twoPointers * 2) + (threePointers * 3);
}

console.log(calculatePoints(1, 1));

function lessThanHundred(num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }

  // return num1 + num2 < 100;
}

console.log(lessThanHundred(50, 50));