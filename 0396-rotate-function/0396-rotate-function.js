/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums,) {
  let sum = 0, total = 0, max = 0;
        for(let i = 0; i < nums.length; i++) {
            sum += i * nums[i];
            total += nums[i];
        }
        max = sum;
        let n = nums.length;
        for(let i = 1; i < n; i++) {
            let tmp = sum + total - n * nums[n - i];
            max = Math.max(max, tmp);
            sum = tmp;
        }
        return max;   
};