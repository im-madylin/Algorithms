const operation = {
    ">=" : (n, m) => n >= m,
    "<=" : (n, m) => n <= m,
    ">!" : (n, m) => n > m,
    "<!" : (n, m) => n < m,
}

function solution(ineq, eq, n, m) {
    const expression = operation[ineq + eq];
    return Number(expression(n, m));
}