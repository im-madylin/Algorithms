function solution(my_string) {
    return [...my_string].map((word, idx) => my_string.slice(idx)).sort();
}