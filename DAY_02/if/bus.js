const bus_num = +prompt("버스번호 입력하세요 (1: 시내, 2: 광역, 3: 마을):");
const age = +prompt("나이를 입력하세요.");

let cost;

// 버스 요금 결정
if (bus_num === 1) cost = 1200;
else if (bus_num === 2) cost = 2000;
else if (bus_num === 3) cost = 1000;
else {
  console.log("잘못된 버스 번호입니다");
  throw new Error("Invalid bus number");
}

// 나이별 할인률 계산
let discountRate;
if (age >= 7 && age <= 12) discountRate = 1; // 어린이: 무료
else if (age >= 13 && age <= 19) discountRate = 0.3; // 청소년: 30% 할인
else if (age >= 20 && age < 65) discountRate = 0; // 성인: 할인 없음
else if (age >= 65) discountRate = 1; // 노인: 무료
else discountRate = 0;

let finalcost = cost * (1 - discountRate);

if (discountRate === 1) {
  console.log("Free");
} else {
  console.log(`${finalcost} 원 입니다`);
}
