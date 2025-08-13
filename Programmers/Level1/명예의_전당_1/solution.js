function solution(k, score) {
  let topK = [];

  return score.map((s) => {
    topK.push(s);
    topK.sort((a, b) => a - b);
    if (topK.length > k) {
      topK.shift();
    }
    return topK[0];
  });
}

const test1 = solution(3, [10, 100, 20, 150, 1, 100, 200]);
const test2 = solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
console.log(test1);
console.log(test2);
