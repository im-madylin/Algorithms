function solution(num_list) {
    const mul = num_list.reduce((acc, cur) => acc * cur);
    const sum = Math.pow(num_list.reduce((acc, cur) => acc + cur), 2);
    return mul < sum ? 1 : 0;
}