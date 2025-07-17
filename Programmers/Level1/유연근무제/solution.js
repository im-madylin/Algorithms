function solution(schedules, timelogs, startday) {
  var answer = 0;

  timelogs.map((log, index) => {
    // 10분을 더했을 때 10의 자리가 60이 넘는 경우 시간대 변경
    const schedule =
      schedules[index] % 100 >= 50
        ? schedules[index] + 50
        : schedules[index] + 10;

    if (
      Math.max(
        ...log.filter((_, index) => {
          if (startday !== 7)
            return index !== 7 - startday - 1 && index !== 7 - startday;
          // startday가 7인 경우의 인덱스
          else return index !== 0 && index !== 6;
        })
      ) <= schedule
    )
      answer++;
  });

  return answer;
}

console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    7
  )
);
