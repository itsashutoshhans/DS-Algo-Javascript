// https://leetcode.com/problems/range-sum-query-immutable/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [];
    this.sums[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        this.sums[i] = this.sums[i-1] + nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j] - (i === 0 ? 0 : this.sums[i-1]);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */