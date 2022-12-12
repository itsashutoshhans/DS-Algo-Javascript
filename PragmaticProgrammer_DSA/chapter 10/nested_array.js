/**
 * Print all the numbers in the next arrays, which can contain numbers and arrays
 */

const array = [
  1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11, [12, 13, 14]]]
];

const printNestedNumbers = (array) => {
  for (let item in array) {
    if (Array.isArray(array[item])) {
      printNestedNumbers(array[item]);
    } else {
      console.log(array[item]);
    }
  }
}

printNestedNumbers(array);