/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const power = (x,n) =>{
        if(x == 0) return 0;
        if(n == 0) return 1;
        let halfValue = power(x,Math.floor(n/2));
        if(n%2 == 0) return halfValue*halfValue;
        else return halfValue*halfValue*x;
    }
    let result = power(x,Math.abs(n));
    return n >= 0 ? result : 1/result;
};