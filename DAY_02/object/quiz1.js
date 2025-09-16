const movie = +prompt("영화종류 선택 1: 일반 2:3D 3:IMAX");
const age = +prompt("나이?");
const snack = +prompt("간식종류 선택 1:팝콘 2:음료 3:없음");
const level = +prompt("좌석등급 선택 1:일반 2:프리미엄 3:vip");

const movie_choose = { 1: 12000, 2: 15000, 3: 18000 };
const snack_choose = { 1: 5000, 2: 2000, 3: 0 };
const level_choose = { 1: 0, 2: 5000, 3: 10000 };

if (age <= 7) {
  totalPrice =
    (movie_choose[movie] + snack_choose[snack] + level_choose[level]) * 0.5;
} else if (age <= 19) {
  totalPrice =
    (movie_choose[movie] + snack_choose[snack] + level_choose[level]) * 0.7;
} else if (age >= 65) {
  totalPrice = 0;
} else {
  totalPrice = movie_choose[movie] + snack_choose[snack] + level_choose[level];
}

alert(totalPrice);
