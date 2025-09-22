// quiz.01 홀/짝 알려주는 함수 만들기
function odd_even(x) {
  if (x % 2 == 0) {
    return `${x}은 짝수 입니다`;
  } else {
    return `${x}은 홀수 입니다`;
  }
  //if대신 : return x % 2 == 1 ? "홀수":"짝수" 가능
}
const a = odd_even(4);
console.log(a);

// quiz.02 어떤 숫자 넣었을때 10보다 크면 💛를 돌려주고 작으면 😸
function icon(x) {
  return x >= 10 ? "💛" : "😸";
}
const b = icon(4);
const b1 = icon(17);
console.log(b);
console.log(b1);

// quiz.03 어떤 아이스크림 맛을 주면, ~맛보다 바로 너 를 돌려주는 함수
function iceCream(x) {
  return `${x}맛 보다 바.로.너.`;
}
const c = iceCream("초코민트");
const c1 = iceCream("아몬드봉봉");
console.log(c);
console.log(c1);

// quiz.04 x,y를 주었을 때, X가 Y보다 크면 x의 y제곱을 돌려주소. 아니면, object로 {fitst:x second:y}
function def4(x, y) {
  if (x > y) {
    return x ** y;
  } else {
    return { first: x, second: y };
  }
}
const d = def4(5, 3);
console.log(d);
const d1 = def4(2, 4);
console.log(d1); // { first: 2, second: 4 }

// quiz.05 x,y,z를 주었을때 가장 큰 수 를 돌려주는 함수
function def5(x, y, z) {
  if (x > y) {
    if (x > z) return x;
    else z;
  } else if (y > x) {
    if (y > x) return y;
  }
}
// quiz.06 년,월,일을 주었을 때, 년-월-일 로 돌려준는 함수
function def6(year, month, date) {
  return `${year}-${month}-${date}`;
}

//quiz.07 버거 사이드,드링크를 매개변수로 넣으면 오브젝트로 나오도록 하기
function def7(burger, sides, drinks) {
  return { main: burger, side: sides, drink: drinks };
}
const g = def7("새우버거", "치즈스틱", "콜라");
console.log(g);

//quiz.08 원화와 나라를 매게변수로 넣으면 다른나라를 넣었을때 현지 통화로 바꿔주는 함수
function def8(won, nation) {
  if (nation == "usa") {
    return won * 1.38;
  } else if (nation == "jpy") {
    return won * 0.94;
  } else if (nation == "thp") {
    return won * 0.43;
  } else {
    return won;
  }
}
const h = def8(1000, "usa");
