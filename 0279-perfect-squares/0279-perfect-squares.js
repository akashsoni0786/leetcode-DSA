/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Map();
    const perfectSq = (num) => {
        if(num == 0) return 0;
        if(dp.has(num)) return dp.get(num);
        let ans = Number.MAX_SAFE_INTEGER;
        for(let i=1;i*i<=num;i++){
            ans = Math.min(ans,perfectSq(num-i*i));
        }
        dp.set(num,ans+1);
        return dp.get(num)
    }
    return perfectSq(n)
};