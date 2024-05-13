const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (line) => {
    const result = Number(line) % 2 === 0 ? "even" : "odd";
    console.log(Number(line), "is", result);
})