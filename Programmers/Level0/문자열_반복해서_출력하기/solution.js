const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

r1.on('line', (line) => {
    input = line.split(' ');
    console.log(input[0].repeat(Number(input[1])));

    // for (i=0; i<n; i++){
    //     process.stdout.write(str);   //이렇게 사용하면 개행 없이 출력할 수 있다
    // }

});