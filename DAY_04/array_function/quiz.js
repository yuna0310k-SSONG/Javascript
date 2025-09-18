const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1 각 요소 3배해서 출력하기
const multiply3 = (x) => {
  return x * 3;
};
const result1 = arr.map(multiply3);
console.log(result1);

//2 각 요소에서 5보다 작으면 2배 , 크면 3배
const multiply = (x) => {
  return x <= 5 ? x * 2 : x * 3;
};
const result2 = arr.map(multiply);
console.log(result2);

//3 각 요소에서 홀수면 💛, 아니면 🍔 출력하기
const odd_even = (x) => {
  return x % 2 == 0 ? "🍔" : "💛";
};
const result3 = arr.map(odd_even);
console.log(result3);

//4 각 요소 뒤에 ":00" 붙혀서 출력하기
const add = (x) => {
  return x + ":00";
};
const result4 = arr.map(add);
console.log(result4);
