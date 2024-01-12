/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
    let left = 0;
    let maxOnesCount = 0;
    let zeroCount = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) zeroCount++;
         while(zeroCount > k){
            if(nums[left] == 0) zeroCount--;
            left++;
         }
         maxOnesCount = Math.max(maxOnesCount,right-left+1)
    }   
    return maxOnesCount;
}