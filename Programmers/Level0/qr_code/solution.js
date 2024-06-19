function solution(q, r, code) {
    return [...code].reduce((result, word, idx) => idx % q === r ? result + word : result , '');
}