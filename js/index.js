// add up the elements(integers) of the array
// trying to be efficient because the integers might be too big

function aVeryBigSum(ar) {
  // Write your code here
  const arSum = ar.reduce((a, b) => a + b, 0);
  return arSum;
}

// const aVeryBigSum = ar.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );

// console.log('aVeryBigSum', aVeryBigSum);
