/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    let len = haystack.length;
    let i=0;
    while(i<len){
        let n = needle.length;
        let j=0
        while(j<n) {
            if(needle[j] == haystack[i+j]) j++;
            else break;
        }
        if(j == n) return i;
        i++
    }
    return -1
};