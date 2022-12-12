/**
 * Print sum of all the numbers from low to high using recursion
 */

const printSum = (low, high) => {
  if (low === high) return low;
  return low + printSum(low + 1, high);
}

console.log(printSum(1, 10));