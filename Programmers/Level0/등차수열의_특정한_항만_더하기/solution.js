function solution(a, d, included) {
    return included.reduce((acc, bool, idx) => {
        return bool ? acc + a + d * idx : acc;
    }, 0)
}