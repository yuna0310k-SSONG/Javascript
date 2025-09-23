/*
const coffee = ["americano", "latte", "mocha", "flat white"];
// map, filter, some, every

//quiz1 대문자화 하기
const def1 = coffee.map((v) => v.toUpperCase());
console.log(def1);

//quiz2 "e"가 들어가는것만 살리기
const def2 = coffee.filter((v) => v.includes("e"));
console.log(def2);

//quiz3 "mo''no'가 있는지 확인
const def3 = coffee.some((v) => v.includes("mo") || v.includes("no"));
console.log(def3);

//quiz4 문자가 5글자보다 작은걸 찾아줘 (첫번째로 찾은애만 돌려줌)
const def4 = coffee.find((v) => v.length <= 5);
console.log(def4);

//quiz5 문자가 5글자보다 작은것이 인덱스 몇번?(첫번째로 찾은애의 번째만 돌려줌)
const def5 = coffee.findIndex((v) => v.length <= 5);
console.log(def5);

//----------------------------------------------------------------------
const words = ["ice", "cream", "cake", "jmt"];

// join 합쳐주는 함수 
const a6 = words.join(" ") / "ice cream cake jmt";

//-----------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];

// reduce : 누적
arr.reduce((a, c) => {
  console.log`a:${a} c:${c}`;
  return a + c;
});

const coffee = ["americano", "latte", "mocha", "flatwhite"];

//quiz 7 총 길이 몇임?
const def7 = coffee.map((v) => v.length).reduce((a, c) => a + c);
console.log(def7);
*/
