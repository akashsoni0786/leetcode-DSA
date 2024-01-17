/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  let max = 0;
    nums = nums.sort((a,b)=>a-b)
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(Math.abs(nums[i] - nums[i - 1]), max);
  }
  return max;
};