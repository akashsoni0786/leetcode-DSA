/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let sum = 0;
    let pre = 0;
    let obj = {};
    for(let i=0;i<nums.length;i++){
        sum+= nums[i];
        if(k!=0) sum %= k;
        if(obj[sum]) return true;
        obj[pre] = 1;
        pre = sum;
    }
	return false
};