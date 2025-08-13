function solution(t, p) {
  let answer = 0;
  const pLength = p.length;

  for (let i = 0; i + pLength <= t.length; i++) {
    const temp = t.slice(i, i + pLength);

    //자릿수가 같은 문자열 숫자는 숫자형으로 변환할 필요 없음
    if (temp <= p) {
      answer++;
    }
  }

  return answer;
}

const test1 = solution("3141592", "271");
const test2 = solution("500220839878", "7");
const test3 = solution("10203", "15");
console.log(test1);
console.log(test2);
console.log(test3);
