/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  let result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let leftVal = nums[l] * nums[l];
    let rightVal = nums[r] * nums[r];
    console.log(leftVal, rightVal);
    if (leftVal < rightVal) {
      result[i] = rightVal;
      r--;
    } else {
      result[i] = leftVal;
      l++;
    }
  }
  return result
};