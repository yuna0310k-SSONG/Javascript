const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1 5이하만 살리기
const def1 = (x) => {
  return x > 5;
};
const result1 = arr.filter(def1);
console.log(result1);

//2 2랑 5만 살리기
const def2 = (x) => {
  return x == 2 || x == 5;
};
const result2 = arr.filter(def2);
console.log(result2);

//3 짝수만 살리기
const def3 = (x) => {
  return x % 2 == 0;
};
const result3 = arr.filter(def3);
console.log(result3);

//4 자기숫자의 제곱을 했을때, 50보다 작은수만 살리기
const def4 = (x) => {
  return x ** x < 50;
};

const result4 = arr.filter(def4);
console.log(result4);
