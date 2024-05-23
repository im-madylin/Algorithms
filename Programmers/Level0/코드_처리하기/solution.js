function solution(code) {
    var mode = 0;
    var ret = '';
    [...code].map((word, idx) => {
        if (word === "1")
            mode = !mode;
        else {
            if (mode) 
                idx % 2 !== 0 ? ret += word : '';
            else
                idx % 2 === 0 ? ret += word : '';
        }
    })
    return ret === '' ? "EMPTY" : ret;
}