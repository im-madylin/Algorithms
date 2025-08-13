function solution(k, m, score) {
  var answer = 0;

  const sortScore = score.sort((a, b) => b - a);

  for (let i = 0; i + m <= score.length; i += m) {
    const result = sortScore.slice(i, i + m);
    answer += Math.min(...result) * m;
  }

  return answer;
}

// 오름차순으로 정렬 후 상자에 담기지 않을 작은 점수의 사과는 버린 후 계산하는 방식
function otherSolution(k, m, score) {
  var answer = 0;

  const sortScore = [...score].sort((a, b) => a - b).slice(score.length % m);

  for (let i = 0; i + m <= score.length; i += m) {
    answer += sortScore[i] * m;
  }

  return answer;
}

const test1 = otherSolution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
const test2 = otherSolution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
console.log(test1);
console.log(test2);
