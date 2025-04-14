/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max=0;
    let x = 0;
    let y = 0;
    let obj = {};
    while(s.length){
        if(obj[s[x]]) {
            while(s[x] != s[y]) {
                  delete obj[s[y]];
                  y++;
            }
            
            delete obj[s[y]];
            y++;
        }
        obj[s[x]]=1;
        x++;
        max = Math.max(max,Object.keys(obj).length);
        if(s.length <= x) break;
    }
    return max;
}