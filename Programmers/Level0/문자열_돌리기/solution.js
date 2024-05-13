const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (line) => {
    let input = line.split('').join('\n');
    console.log(input);
})