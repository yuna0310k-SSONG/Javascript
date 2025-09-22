const fruits = [
  "watermelon",
  "apple",
  "melon",
  "grape",
  "banana",
  "peach",
  "kiwi",
  "pineapple",
  "strawberry",
  "orange",
  "plum",
];
// 1번 문제 : 배열들 길이로 바꾸기
const long = (x) => {
  return x.length;
};
const result1 = fruits.map(long);
console.log(result1);

//2번 문제 : 6글자 이상이면 대문자, 아니면 yh문자
const type = (x) => {
  if (x.length >= 6) {
    return x.toUpperCase();
  } else {
    return x.toLowerCase();
  }
};
const result2 = fruits.map(type);
console.log(result2);

//3번 : a 또는 e 들어가면 꿀맛 , 안들어가면 노맛
const contain = (x) => {
  if (x.includes("a") || x.includes("e")) {
    return "꿀맛";
  } else {
    return "노맛";
  }
};
const result3 = fruits.map(contain);
console.log(result3);

//4번 : 첫 글자만 대문자
const cap = (x) => {
  return x[0].toUpperCase() + x.slice(1, x.length);
};
const result4 = fruits.map(cap);
console.log(result4);

//5번 : 오브젝트로 만들기
const mul = (x) => {
  return { name: x, length: x.length };
};
const result6 = fruits.map(mul);
console.log(result6);
