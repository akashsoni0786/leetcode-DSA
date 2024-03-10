/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let h1 = {};
    let h2 = {};
    for(let i=0;i<nums1.length;i++){
        h1[nums1[i]] = (h1[nums1[i]] ?? 0)+1
    }
    for(let i=0;i<nums2.length;i++){
        h2[nums2[i]] = (h2[nums2[i]] ?? 0)+1
    }
    let ans = [];
    let target = Object.keys(nums1).length>Object.keys(nums2).length ? h2:h1;
    Object.keys(target).forEach((e)=>{
      if(h1[e] && h2[e]) {
            ans.push(e)
        }
    })
    return ans;
};