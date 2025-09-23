//Quiz 01
const birth_year = window.prompt("태어난 년도");
const birth_month = window.prompt("태어난 월");
const birth_day = window.prompt("태어난 일");
window.console.log(
  `당신이 태어난 때는 ${birth_year}년${birth_month}월${birth_day}일 이시군요!`
);

//Quiz 02
const elementry = window.prompt("초등학교 이름?");
const middle = window.prompt("중학교 이름");
const high = window.prompt("고등학교 이름?");
window.console.log(
  `당신의 학교 이력:
  ${elementry}초등학교 
  ${middle}중학교 
  ${high}고등학교`
);

//Quiz 03
const first = window.prompt("베라에서 제일 좋아하는 아이스크림?");
const second = window.prompt("베라에서 두번째로 좋아하는 아이스크림?");
const third = window.prompt("베라에서 세번째로 좋아하는 아이스크림?");
window.console.log(
  `파인트 컵에 ${first}맛, ${second}맛, ${third}맛 담아서 드립니다!`
);
