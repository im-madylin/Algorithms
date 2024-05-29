function solution(arr, queries) {
    return queries.map((query) => {
        var result = arr.filter((num, idx) => idx >= query[0] && idx <= query[1] && num > query[2]);
        return result.length === 0 ? -1 : Math.min(...result);
    })
}