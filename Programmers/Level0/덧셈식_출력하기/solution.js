const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (line) => {
    const [a, b] = line.split(' ').map(Number);
    console.log(`${a} + ${b} = ${a + b}`);
})