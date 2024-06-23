function solution(my_string, indices) {
    let arr = Array.from(my_string);
    indices.sort((a, b) => b - a).forEach(idx => arr.splice(idx, 1));
    return arr.join('');
}