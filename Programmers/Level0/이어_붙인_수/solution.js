function solution(num_list) {
    var odd = '';
    var even = '';
    for (const num of num_list) {
        num % 2 === 0 ? even += String(num) : odd += String(num);
    }
    return Number(odd) + Number(even);
}