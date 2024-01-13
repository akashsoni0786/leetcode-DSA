/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length == 0) return []
    let len = strs.length;
    let cmp = new Map();
    let result = [];
    for(let i=0;i<len;i++){
        let str = strs[i].split("").sort().join("")
        if(cmp.has(str)) {
          let temp = [...cmp.get(str),strs[i]]
            cmp.set(str,temp)
        } else {
            cmp.set(str,[strs[i]])
        }
    }
    cmp.forEach((i)=>{
        result.push(i)
    })
    return result;
    
};