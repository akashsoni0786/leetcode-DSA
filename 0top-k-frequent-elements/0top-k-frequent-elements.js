/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {}
    let ans = []
    for(let i=0;i<nums.length;i++){
        freq[nums[i]] = (freq[nums[i]] ?? 0) + 1;
    }
    let arr = [];
    Object.keys(freq).forEach((i)=>{
        arr.push([i,freq[i]])
    })
    arr.sort((a,b)=>b[1]-a[1])
    for(let i=0;i<k;i++){
        ans.push(arr[i][0])
    }
    return ans;
};