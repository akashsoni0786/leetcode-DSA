/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 let ans = [];
 let obj = {};
 for(let i=0;i<nums.length;i++){
    obj[nums[i]] = i;
 }
 for(let i=0;i<nums.length;i++){
    let val = target - nums[i];
    if(obj[val] && obj[val] != i) ans=[i,obj[val]]
 }
 return ans.sort((a,b)=>a-b)
};