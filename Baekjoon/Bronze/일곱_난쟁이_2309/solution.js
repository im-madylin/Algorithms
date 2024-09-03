const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let input = [];

r1.on('line', (line) => {
    input.push(Number(line));

    if (input.length === 9) {
        const totalHeight = input.reduce((sum, cur) => sum + cur, 0);

        for(let i = 0; i < 9; i++) {
            for (let j = i + 1; j < 9; j++) {
                if (totalHeight - input[i] - input[j] === 100) {
                    const result = input.filter((_, index) => index !== i && index !== j);
                    console.log(result.sort((a, b) => a - b).join('\n'));
                    return ;
                }
            }
        }
    }
})