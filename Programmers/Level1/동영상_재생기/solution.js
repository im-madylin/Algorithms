function solution(video_len, pos, op_start, op_end, commands) {
  const videoTime = convertToSecond(video_len);
  let posTime = convertToSecond(pos);
  const op_startTime = convertToSecond(op_start);
  const op_endTime = convertToSecond(op_end);

  return convertToFormat(
    commands.reduce((acc, cur) => {
      posTime =
        cur === "next"
          ? movePos(skipOpening(acc, op_startTime, op_endTime), 10, videoTime)
          : movePos(skipOpening(acc, op_startTime, op_endTime), -10, videoTime);

      return skipOpening(posTime, op_startTime, op_endTime);
    }, posTime)
  );
}

function convertToSecond(time) {
  const timeArray = time.split(":");
  return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
}

function skipOpening(pos, op_start, op_end) {
  return pos >= op_start && pos <= op_end ? op_end : pos;
}

function movePos(pos, moveTime, video_len) {
  const result = pos + moveTime;

  if (result > video_len) return video_len;
  else if (result < 0) return 0;
  else return result;
}

function convertToFormat(time) {
  const minute = Math.floor(time / 60).toString();
  const second = String(time % 60);

  return `${minute.length === 1 ? "0" + minute : minute}:${
    second.length === 1 ? "0" + second : second
  }`;
}

const test1 = solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]);
const test2 = solution("10:55", "00:05", "00:15", "06:55", [
  "prev",
  "next",
  "next",
]);
const test3 = solution("07:22", "04:05", "00:15", "04:07", ["next"]);
const test4 = solution("30:00", "15:00", "15:10", "15:30", ["next", "next"]);

console.log(test2);
