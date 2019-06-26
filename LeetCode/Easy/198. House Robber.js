// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  /** Iterative approach
   * we check the current value plus robbed value till previous to previous (i-2th)
   * is more the robbed value till previous house(adjacent, i - 1th)
   */
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let memo = [];
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  
  /** this is equivalent to max of current value (nums[1] plus i - 2th value( here i - 2 
   * is less than zero we assume the value to 0 i.e. nothing being robbed yet))
   */
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1]);
  }
  return memo[memo.length - 1];
};
