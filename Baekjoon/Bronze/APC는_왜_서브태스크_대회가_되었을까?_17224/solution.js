const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let input = [];
let N, L, K;

r1.on('line', (line) => {
    if (input.length === 0)
        [N, L, K] = line.split(' ').map(Number);
    input.push(line);

    if (input.length === N + 1) {
        input.shift();
    
        let score = 0;
        let tmp = input.filter((sub) => {
            if (K) {
                const [sub1, sub2] = sub.split(' ');
                if (sub2 <= L) {
                    score += 140;
                    K--;
                } else
                    return sub;
            }
        })
        tmp.filter((sub) => {
            if (K) {
                const [sub1, sub2] = sub.split(' ');
                if (sub1 <= L) {
                    score += 100;
                    K--;
                } }
        })
        console.log(score);
    }
})