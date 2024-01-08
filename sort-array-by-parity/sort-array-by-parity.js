/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let leftIndex = 0;
    for(let i=0;i<nums.length;i++){
        if (nums[i] % 2 === 0) {
            let temp = nums[leftIndex];
            nums[leftIndex] = nums[i];
            nums[i] = temp;
            leftIndex++; 
        }
    }
    return nums;
};