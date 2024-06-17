function solution(my_string, s, e) {
    let result = s != 0 ? my_string.slice(0, s) : '';
    result += my_string.slice(s, e + 1).split('').reverse().join('');
    if (e + 1 != my_string.length)
        result += my_string.slice(e + 1);
    return result;
}