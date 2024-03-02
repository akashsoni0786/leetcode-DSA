/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let index = n-1;
    let l = 0;
    let r = n-1;
    let ans = Array(n);
    while(index>=0){
        if(Math.abs(nums[l]) > Math.abs(nums[r])) {
            ans[index--] = nums[l]*nums[l];
            l++;
        }else{
            ans[index--] = nums[r]*nums[r];
            r--;
        }
    }
    return ans;
};