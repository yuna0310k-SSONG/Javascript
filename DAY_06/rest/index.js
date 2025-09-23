//rest 문법
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// spread : 스프레드
const sumArr = [...arr1, ...arr2];
//rest : 레스트
const [a, b, ...c] = arr1;
const [a1, b1] = c;

//rest : 나머지 요소를 모아모아해서 배열로 만듬
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a2, b2, ...d] = arr; //a2 = 1, b2 = 2, d = [3, 4, 5, 6, 7, 8, 9]
const [a3, b3, ...other] = d; //a3 = 3, b3 = 4, other = [5, 6, 7, 8, 9]
const [a4, b4, ...happy] = other; //a4 = 5, b4 = 6, happy = [7, 8, 9]
const [a5, b5, c5] = happy; //a5 = 7, b5 = 8, c5 = 9

const koreaIT = {
  _a: "java",
  _b: "python",
  _c: "javascript",
  _d: "C",
  _e: "linux",
};
const { _a, _b, ...q } = koreaIT;
const { _e } = q;
console.log(_e); //linux

const company = {
  ceo: "신여진",
  Header: "이영철",
  senior: ["박신율", "권유나", "전상원"],
  intern: ["손정우", "전수효"],
};

const [p1, p2] = company.senior; // p1 = "박신율", p2 = "권유나"
const { Header, senior, ...others } = company;
// Header = "이영철", senior = ["박신율","권유나","전상원"]
// others = { ceo: "신여진", intern: ["손정우","전수효"] }
const { intern } = others; // intern = ["손정우","전수효"]
const [, p4] = intern; // p4 = "전수효"

const t1 = { top: "도란", jg: "오너", mid: "갓", ad: "구마유시", sp: "케리아" };
const { ad, sp } = t1; //구마유시 케리아

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); //1
console.log(rest); //[2,3.4]
