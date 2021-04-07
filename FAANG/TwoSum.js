// brute force

function findTwoSum(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) return [p1, p2];
    }
  }
  return null;
}

console.log(findTwoSum([1,3,7,9,2], 11));
console.log(findTwoSum([], 11));

// o(n)

var twoSum = function(nums, target) {
  // hashmap {numberToFind: index}
  
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
      const currentMapVal = numsMap[nums[p]];
      if (currentMapVal >= 0) {
          return [currentMapVal, p];
      } else {
          const numberToFind = target - nums[p];
          numsMap[numberToFind] = p;
      }
  }
  return null;
};