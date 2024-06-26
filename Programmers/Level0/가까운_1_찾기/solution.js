function solution(arr, idx) {
    let result = arr.slice(idx).indexOf(1);
    return result === -1 ? result : result + idx;
}