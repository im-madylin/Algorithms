function solution(my_string) {
    let result = new Array(52).fill(0);
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    [...my_string].forEach(word => {
        result[alphabet.indexOf(word)] += 1;
    })
    
    return result;
}