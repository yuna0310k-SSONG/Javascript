const arr = [1, 3, 5, 7, 9];

//map: 안에 있는 요소를 바꾸는 함수

const double = (x) => {
  return x * 2;
};
const plus10 = (x) => {
  return x + 10;
};
const result = arr.map(plus10);
console.log(result);

//filter은 안에 있는 요소를 조건에 의하여 거르기
const biggerFive = (x) => {
  return x > 3 && x < 7;
};

const first = arr.filter(biggerFive);
console.log(first);

//some : 하나라도 true 면 true
//1. 요소중에 5 있니?

const five = (x) => {
  return x == 5;
};
const result1 = arr.some(five);
console.log(result1); //true

//2. 요소중에 짝수 있니?
const even = (x) => {
  return x % 2 == 0;
};
const result2 = arr.some(even);
console.log(result2); //false

//every : 다 맞아야함
