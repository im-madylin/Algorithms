function solution(n, w, num) {
  let answer,
    maxValue = 0;
  let currentValue = num;

  while (n >= currentValue) {
    answer++;
    maxValue = Math.ceil(currentValue / w) * w;
    currentValue += (maxValue - currentValue) * 2 + 1;
  }

  return answer;
}

console.log(solution(2, 1, 1));
