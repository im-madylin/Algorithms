const calculation = {
    "1" : "w",
    "-1" : "s",
    "10" : "d",
    "-10" : "a"
}

function solution(numLog) {
    var result = [];
    
    numLog.slice(1).reduce((acc, cur) => {
        result.push(calculation[String(cur - acc)]);
        return cur;
    }, numLog[0]);

    return result.join('');
}