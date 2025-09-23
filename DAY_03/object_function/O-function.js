const calculator = {
  num: 0,
  add: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  square: function (x, y) {
    return x ** y;
  },
};
console.log(calculator.num);
console.log(calculator.add(5, 10));
console.log(calculator.add);
console.log(calculator.multiply(3, 3));

// quiz 01
const baskinrabins = {
  icecream: function (flavor) {
    return `${flavor}맛 아이스크림 나왔습니다`;
  },
  coffee: function (shots) {
    return `샷 ${shots}번 들어간 커피 나왔습니다`;
  },
  cake: function (flavor) {
    return `${flavor}맛 아이스크림 케이크 나왔습니다`;
  },
};
console.log(baskinrabins.icecream("베리베리 스트로베리"));
console.log(baskinrabins.coffee(3));
console.log(baskinrabins.cake("베리베리 스트로베리"));

//quiz 02
const point = {
  x: 0,
  up: function () {
    this.x = this.x + 1;
  },
  down: function () {
    this.x = this.x - 1;
  },
};
