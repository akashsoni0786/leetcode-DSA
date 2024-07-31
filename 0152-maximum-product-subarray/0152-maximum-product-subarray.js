/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let n = nums.length;
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for(let i=1; i<n; i++) {
        if(nums[i] < 0)  [max,min] = [min,max];
        
        max = Math.max(nums[i] * max, nums[i]);
        min = Math.min(nums[i] * min, nums[i]);
        
        result = Math.max(max, result)

    }
    return result;
};