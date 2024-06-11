function solution(my_strings, parts) {
    return my_strings.reduce((result, str, i) => result + str.slice(parts[i][0], parts[i][1] + 1), '');
}