/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let start = -1;
    let iIndex = -1;
    let i=0;
    let j=0;
    while(s.length>i){
        if(j < p.length && (s[i] == p[j] || p[j] == '?')){
            i++;j++;
        } else if(j < p.length && p[j] == '*'){
            start = j;
            iIndex = i;
            j++;
        } else if(start != -1){
            i = ++iIndex;
            j = start+1;
        } else return false
    }
    while(p.length>j && p[j] == "*") j++;
    return j == p.length?true:false;
};