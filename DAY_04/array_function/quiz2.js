const venti = [
  { name: "iced americano", price: 2000, shots: 2 },
  { name: "iced latte", price: 3000, shots: 2 },
  { name: "iced mocha", price: 3000, shots: 2 },
  { name: "strawberry latte", price: 4000, shots: 0 },
  { name: "mango ade", price: 3500, shots: 0 },
];

// 1. 전체에 샷 추가
const def1 = (x) => {
  x.shots = x.shots + 1;
  return x;
};
const result1 = venti.map(def1);
console.log(result1);

// 2. 가격이 3500원 이상이면 +500원 , 아니면 +200원해서 돌려주기
const def2 = (x) => {
  const reprice= x.price >= 3500 ? x.price + 500 : x.price + 200;
  return x;
};
const result2 = venti.map(def2);
console.log(result2);

//3
const