function solution(name, yearning, photo) {
  return photo.map((photo) => {
    return photo.reduce((acc, cur) => {
      return (acc += yearning[name.indexOf(cur)] || 0);
    }, 0);
  });
}

const test1 = solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
const test2 = solution(
  ["kali", "mari", "don"],
  [11, 1, 55],
  [
    ["kali", "mari", "don"],
    ["pony", "tom", "teddy"],
    ["con", "mona", "don"],
  ]
);
const test3 = solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
);

console.log(test1);
console.log(test2);
console.log(test3);
