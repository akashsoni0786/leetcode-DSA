/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        let len = String(nums[i]).length;
        if(len%2 == 0) count++
    }
    return count;
};