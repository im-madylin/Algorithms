const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let input = [];

r1.on('line', (line) => {
    input.push(Number(line));

    
    if (input.length === 10) {
        let result = input[0];

        for (let i = 1; i < 10; i++) {
            const case1 = Math.abs(100 - result);
            const case2 = Math.abs(100 - result - input[i]);
            if (case1 < case2) 
                break;
            else
                result += input[i];
        }
        console.log(result);
    }
})