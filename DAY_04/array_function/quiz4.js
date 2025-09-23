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

//1. 6글자 이상만 과일 남기기
const def1 = (x) => {
  return x.length >= 6;
};
const result1 = fruits.filter(def1);
console.log(result1);

//2. 알파벳 m이 들어가면 없애기
const def2 = (x) => {
  return !x.includes("m");
};
const result2 = fruits.filter(def2);
console.log(result2);

//3. a,e,i.o.u 로 시작하는 과일은 살리기
const result3 = fruits.filter((x) =>
  ["a", "e", "i", "o", "u"].some((v) => x.startsWith(v))
);
console.log(result3);

//4
const result5 = fruits
  .filter((v) => v.includes("i") || v.includes("e"))
  .filter((v) => v.length >= 4)
  .map((v) => v.toUpperCase());

console.log(result5);
