function solution(intStrs, k, s, l) {
    return intStrs.map(str => Number(str.substr(s, l))).filter(num => num > k);
}