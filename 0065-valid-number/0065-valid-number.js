/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s.length == 0 || s == "." || s == 'e' || s[0] == 'e' || s.includes("nfinity")) return false;
    let num = parseInt(s) + 0;
    if(isNaN(s)) return false;
    
    return true;
};