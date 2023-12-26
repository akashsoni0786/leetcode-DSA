/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let hm = new Map();
  let count = 0;
  for(let i=0;i<nums.length;i++){
    if(!hm.has(nums[i])) {
      nums[count++]  = nums[i]
      hm.set(nums[i],1)
    }
  }
  return count;
};