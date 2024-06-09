function solution(my_string, queries) {
    return queries.reduce((acc, cur) => {
        let result = cur[0] ? acc.slice(0, cur[0]) : '';
        result += acc.slice(cur[0], cur[1] + 1).split('').reverse().join('');
        if (cur[1] + 1 < my_string.length) 
            result += acc.slice(cur[1] + 1);
        return result;
    }, my_string);
}