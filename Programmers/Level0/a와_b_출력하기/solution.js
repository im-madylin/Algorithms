const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

r1.on('line', (line) => {
      input = line.split(' ');
}).on('close', () => {
    console.log("a =", input[0]);
    console.log("b =", input[1]);
});