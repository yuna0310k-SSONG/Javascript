// quiz 01
const long = Number(window.prompt("한변의 길이는?"));
window.console.log(
  `한변의 길이가 ${long}일때 정사각형 넓이는 ${long * long} 입니다.`
);

// quiz 02
const base = Number(window.prompt("밑변의 길이는?"));
const height = Number(window.prompt("높이의 길이는?"));
window.console.log(
  `밑변 길이가 ${base}이고, 높이가 ${height}일때 삼각형 넓이는 ${
    (base * height) / 2
  } 입니다.`
);

// quiz 03
const kor = Number(window.prompt("원화 얼마?"));
window.console.log(`${kor}원은  ${kor / 9.41}엔 입니다.`);

// quiz 04
const min = Number(window.prompt("몇분?"));
window.console.log(`${min}분은 ${min * 60}초 입니다.`);
