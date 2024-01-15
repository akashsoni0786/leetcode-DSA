/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left =0;
    let right = nums.length-1;
    let i=0;
    while(i<=right){
      if(nums[i] == 0){
        [nums[i],nums[left]] = [nums[left],nums[i]];
        left++;
        i++;
      } else if(nums[i] == 1){
        i++
      }else{
        [nums[i],nums[right]] = [nums[right],nums[i]];
        right--;
      }
      
    }
    return nums;
    
};