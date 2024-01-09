/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if (!nums.includes(1)) return 0;
  let pf = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0 || nums[i] == 0) pf[i] = nums[i];
    else {
        pf[i] = pf[i - 1] + nums[i];
    }
  }
  return Math.max(...pf);
};