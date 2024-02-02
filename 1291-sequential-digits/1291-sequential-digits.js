var sequentialDigits = function (low, high) {
const nextSeqNum = (n, l) => {
        let d = n;
        while (--l) n = n * 10 + ++d;
        return n;
    }
    // get all sequence num with the given length
    const genSeqNum = len => {
        const res = [];
        for (i = 1; i <= 10 - len; i++) {
            res.push(nextSeqNum(i, len));
        }
        return res;
    }
    const lenLeft = ('' + low).length;
    const lenRight = ('' + high).length;
    let res = [];
    for (let i = lenLeft; i <= lenRight; i++) {
        res = res.concat(genSeqNum(i));
    }
    return res.filter(x => x >= low && x <= high);
};