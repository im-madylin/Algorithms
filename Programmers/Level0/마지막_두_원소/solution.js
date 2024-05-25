function solution(num_list) {
    var last_idx = num_list.length - 1;
    const last_num = num_list[last_idx];
    const before_num = num_list[last_idx - 1];
    last_num > before_num ? num_list.push(last_num - before_num) : num_list.push(last_num * 2);
    
    return num_list;
}