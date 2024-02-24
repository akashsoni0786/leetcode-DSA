/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let checkJudge = Array(n+1).fill(1);
    let count = Array(n+1).fill(0);
    for (let [a, b] of trust) {
        count[b] += 1
        checkJudge[a] = 0
    }
    for(let i=1;i<=n;i++){
        if(checkJudge[i] == 1){
            return count[i]==n-1 ? i:-1
        }
    }
    return -1;
    
};