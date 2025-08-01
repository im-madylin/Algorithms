function solution(cards1, cards2, goal) {
  let answer = "Yes";

  goal.forEach((item) => {
    if (cards1[0] === item) cards1.shift();
    else if (cards2[0] === item) cards2.shift();
    else answer = "No";
  });

  return answer;
}

// 시간 복잡도 고려한 버전
function solution1(cards1, cards2, goal) {
  let answer = "Yes";
  let cards1Index = 0;
  let cards2Index = 0;

  goal.forEach((item) => {
    if (cards1[cards1Index] === item) cards1Index++;
    else if (cards2[cards2Index] === item) cards2Index++;
    else answer = "No";
  });

  return answer;
}

const test1 = solution1(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
const test2 = solution1(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

console.log(test1);
console.log(test2);
