const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let index = 1;
r1.on('line', (line) => {
    let [L, P, V] = line.split(' ').map(Number);

    if (L == 0 && P == 0 && V == 0)
        process.exit();
    
    let result = Math.floor(V / P) * L;
    if (V % P < L) 
        result += V % P;
    else
        result += L;

    console.log(`Case ${index++}: ${result}`);
})