/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = [];
    let n = nums.length;
    let obj  = {};
    for(let i=0;i<n;i++) {
        obj[nums[i]] = i;
    }
    for(let i=0;i<n;i++) {
        let val = target - nums[i]
        if(obj[val] && obj[val] != i) ans = [i,obj[val]].sort((a,b)=>a-b)
    }
    return ans;
};