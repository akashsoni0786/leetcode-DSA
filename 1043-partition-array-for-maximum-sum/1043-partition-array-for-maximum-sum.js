/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length + 1
    const dp = Array(n).fill(0)
    for (let i = 1; i < n; i++) {
        let curr_max = arr[i-1]
        let dpi = dp[i-1] + curr_max
        for (let j = 2, m = Math.min(k, i) + 1; j < m; j++) {
            if (curr_max < arr[i-j]) 
                curr_max = arr[i-j]
            dpi = Math.max(dpi, dp[i-j] + curr_max * j)
        }
        dp[i] = dpi
    }
    return dp[n-1]
};