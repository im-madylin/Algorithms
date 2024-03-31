function solution(arr, queries) {
    queries.map((query) => arr.slice(query[0], query[1] + 1).filter((num, idx) => (idx + query[0]) % query[2] === 0 ? arr[idx + query[0]]++ : ''))
    return arr;
}