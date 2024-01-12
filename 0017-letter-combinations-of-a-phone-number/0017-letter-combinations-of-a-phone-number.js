/**
 * @param {string} digits
 * @return {string[]}
 */
let digits_obj = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
var letterCombinations = function (digits) {
    if(digits == "") return [];
    let ans = [];
    const combination = (idx,curr) => {
        if(idx == digits.length) { ans.push(curr.join(''));
    return;}
        let letters = digits_obj[digits[idx]];
        for(let ltr of letters) {
            curr[idx] = ltr;
            combination(idx+1,curr);
        }
    }
    combination(0,[])
    return ans;
};