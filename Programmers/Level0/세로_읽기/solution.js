function solution(my_string, m, c) {
    return [...my_string].reduce((result, word, idx) => idx % m + 1 === c ? result + word : result,'');
}