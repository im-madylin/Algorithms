const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let input = [];

const countWord = (str, word) => {
    return str.split(word).length - 1;
}

r1.on('line', (line) => {
    input.push(line);

    if (input.length === 2) {
        const num = Number(input[0]);
        const str = input[1];
        
        let count = countWord(str, 'S') + countWord(str, 'L') / 2 + 1;
        console.log(count > num ? num : count);
    }
}).on('close', function () {
    process.exit();
});