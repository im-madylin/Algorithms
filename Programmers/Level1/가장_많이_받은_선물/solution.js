function solution(friends, gifts) {
  let giftRecords = {};
  let giftPoints = {};
  let nextMonthGifts = {};

  // 데이터 저장할 객체 초기화
  friends.forEach((friend) => {
    const record = {};
    friends.forEach((Anotherfriend) => {
      if (friend !== Anotherfriend) record[Anotherfriend] = 0;
    });
    giftRecords[friend] = record;
    giftPoints[friend] = 0;
    nextMonthGifts[friend] = 0;
  });

  // 준 선물 기록
  gifts.forEach((gift) => {
    const [from, to] = gift.split(" ");
    giftRecords[from][to]++;
    giftPoints[from]++;
    giftPoints[to]--;
  });

  // 다음 달 선물 개수 계산
  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const A = friends[i];
      const B = friends[j];
      const AGaveB = giftRecords[A][B];
      const BGaveA = giftRecords[B][A];
      if (AGaveB > BGaveA) {
        nextMonthGifts[A]++;
      } else if (BGaveA > AGaveB) {
        nextMonthGifts[B]++;
      } else {
        if (giftPoints[A] > giftPoints[B]) {
          nextMonthGifts[A]++;
        } else if (giftPoints[B] > giftPoints[A]) {
          nextMonthGifts[B]++;
        }
      }
    }
  }

  return Math.max(...Object.values(nextMonthGifts));
}

const test1 = solution(
  ["muzi", "ryan", "frodo", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
  ]
);
const test2 = solution(
  ["joy", "brad", "alessandro", "conan", "david"],
  [
    "alessandro brad",
    "alessandro joy",
    "alessandro conan",
    "david alessandro",
    "alessandro david",
  ]
);
const test3 = solution(
  ["a", "b", "c"],
  ["a b", "b a", "c a", "a c", "a c", "c a"]
);

console.log(test1);
console.log(test2);
console.log(test3);
