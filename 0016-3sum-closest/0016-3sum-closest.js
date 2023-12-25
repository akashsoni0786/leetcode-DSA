/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b)
    let ans = 0
    let minDiff = Infinity;
    for(let i=0;i<nums.length;i++){
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            let sum = nums[i] + nums[left]+nums[right];
            let diff = Math.abs(sum - target);
            if(diff < minDiff){
                ans = sum;
                minDiff = diff
            }
            if(sum>target) {
               right--;
            } else{
                left++;
            }
        }
    }
    return ans;
};