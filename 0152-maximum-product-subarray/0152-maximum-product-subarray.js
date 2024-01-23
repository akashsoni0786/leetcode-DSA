/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length == 0) return 0;
    
    let maxP = nums[0];
    let minP = nums[0];
    let res = nums[0];
    
    for(let i=1;i<nums.length;i++){
        if(nums[i] < 0) [minP,maxP] = [maxP,minP];
        minP = Math.min(nums[i], minP*nums[i])
        maxP = Math.max(nums[i], maxP*nums[i])
        res = Math.max(res,maxP)
    }
    return res;
};