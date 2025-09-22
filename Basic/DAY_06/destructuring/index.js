const coffee = ["A", "L", "M"];

//destructuring
const test = coffee; //["A", "L", "M"]
const [B, C] = coffee; //"A", "L"
const [, B1, C1] = coffee; //"L","M"   //무조건 순서대로 나옴

//destructuring 오브젝트 편
const car = { name: "테슬라", price: 10000, color: "흰색" };

const q1 = car; //{ name: "테슬라", price: 10000, color: "흰색" };
const { name } = car;
const { price, color } = car; //
console.log({ price, color });
