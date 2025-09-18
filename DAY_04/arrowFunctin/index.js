//일반함수
function add(x, y) {
  return x + y;
}
//화살표 함수
const add1 = (x, y) => {
  return x + y;
};

//빼기 화살표 함수 x,y
const minus = (x, y) => {
  return x - y;
};

//name이랑 age주면 오브젝트 타입으로 돌려주기
const me = (name, age) => {
  return { name: name, age: age };
};

//
const menu = (menu, menu1, menu2) => {
  return [
    { name: menu, price: 0 },
    { name: menu1, price: 0 },
    { name: menu2, price: 0 },
  ];
};

//quiz 01 : x를 주면 2배 돌려주는 함수
const def1 = (x) => {
  return x * 2;
};

//quiz 02 : x를 주면 -500해서 돌려주는 함수
const def2 = (x) => {
  return x - 500;
};

//quiz 03 : x,y를 주면 더 큰숫자를 돌려주는 함수
const def3 = (x, y) => {
  return x > y ? x : y;
};
const a = def3(5, 7);
console.log(a);

//quiz 04 : str을 주면 길이를 돌려주는 함수
const def4 = (x) => {
  return x.length;
};
const b = def4("like");
console.log(b);

//quiz 05 : str을 주면 문자의 길이가 10글자 보다 크면 길이가 길어요!
const def5 = (x) => {
  return x.length > 10 ? "길이가 길어요!(10글자 초과)" : "길이가 적당해요";
};
const c = def5("likeyousomuch");
console.log(c);

//quiz 06 : str을 주면 str하다니 러키비키 하잖아? 돌려주는 함수
const def6 = (x) => {
  return `${x}하다니,러키비키 잖아💛`;
};
const d = def6("배고파 ");
console.log(d);

//quiz 07 : x,y를 주면 x의y제곱으로 돌려주는 함수
const def7 = (x, y) => {
  return x ** y;
};
const e = def7(2, 3);
console.log(e);

//quiz 08 : str을 주었을때 a or b 포함이면 a,b포함! 돌려주는 함수
const def8 = (x) => {
  if (x.includes("a")) {
    return "A,B 포함!";
  } else if (x.includes("b")) {
    return "A,B 포함!";
  } else {
    return "A,B 미포함!";
  }
};
const f = def8("dkjlkjl");
console.log(f);

//quiz 09 : x를 주었을때, x 의 구구단의 배수를 배열로 돌려주는 함수
const def9 = (x) => {
  return [x * 1, x * 2, x * 3, x * 4, x * 5, x * 6, x * 7, x * 8, x * 9];
};

//quiz 10 : str
const def10 = (str, x) => {
  return str.slice(0, x + 1);
};
