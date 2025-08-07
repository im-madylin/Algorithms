function solution(s) {
  return [...s].map((char, index) => {
    const sameWordIndex = s.slice(0, index).lastIndexOf(char);
    return sameWordIndex === -1 ? -1 : index - sameWordIndex;
  });
}

const test1 = solution("banana");
const test2 = solution("foobar");

console.log(test1);
console.log(test2);
