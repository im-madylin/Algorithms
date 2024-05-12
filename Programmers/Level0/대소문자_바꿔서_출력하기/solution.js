const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str;

r1.on('line', (line) => {
    for (word of line) {
        if (word === word.toUpperCase())
            process.stdout.write(word.toLowerCase());
        else
            process.stdout.write(word.toUpperCase());
    }
})