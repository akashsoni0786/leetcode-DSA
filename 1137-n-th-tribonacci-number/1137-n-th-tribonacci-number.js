/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let tb = [];
    tb[0] = 0;
    tb[1] = 1;
    tb[2] = 1;
    for(let i=3;i<=n;i++){
        tb[i] = tb[i-3]+tb[i-2]+tb[i-1]
    }
    return tb[n]
};