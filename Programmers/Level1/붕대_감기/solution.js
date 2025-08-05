function solution(bandage, health, attacks) {
  let curTime = 1;
  let curHealth = health;

  for (let i = 0, calc = 0; i < attacks.length && curHealth > 0; i++) {
    const timeDiff = attacks[i][0] - curTime;
    const continueBandages = timeDiff / bandage[0];

    if (timeDiff >= bandage[0]) {
      calc =
        Math.floor(continueBandages) * bandage[2] +
        Math.floor(continueBandages) * bandage[1] +
        (timeDiff - Math.floor(continueBandages)) * bandage[1];
    } else {
      calc = timeDiff * bandage[1];
    }

    calc = calc + curHealth >= health ? health : calc + curHealth;
    curHealth = calc - attacks[i][1];
    curTime = attacks[i][0] + 1;
  }

  return curHealth > 0 ? curHealth : -1;
}

const test1 = solution([5, 1, 5], 30, [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
]);
const test2 = solution([3, 2, 7], 20, [
  [1, 15],
  [5, 16],
  [8, 6],
]);
const test3 = solution([4, 2, 7], 20, [
  [1, 15],
  [5, 16],
  [8, 6],
]);
const test4 = solution([1, 1, 1], 5, [
  [1, 2],
  [3, 2],
]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
