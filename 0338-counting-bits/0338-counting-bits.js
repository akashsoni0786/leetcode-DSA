/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n == 0) return [0];
    let ans = [0,1];
    if(n == 1) return ans;
    for(let i=2;i<=n;i++){
        let k = i;
        let c = 0
        while(k>0){
            let rem = k%2;
            if(rem == 1) c++
            k = Math.floor(k/2);
        }
        ans.push(c)
    }
    return ans;
};