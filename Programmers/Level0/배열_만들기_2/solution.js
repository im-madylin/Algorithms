function solution(l, r) {
    var arr = [];
    for (let i = l; i <= r; i++)
        i % 5 === 0 ? arr.push(i) : '';

    var result = arr.filter((num) => {
        let str_num = String(num);
        for (let i = 0; i < str_num.length; i++) {
            if (str_num[i] != '5' && str_num[i] != '0') return false;
        }
        return true;
    });
    
    return result.length === 0 ? [-1] : result;
}