/*const subway = {
  sales: 0,
  menu: [
    { name: "club", stock: 3, price: 7000 },
    { name: "blt", stock: 2, price: 7500 },
    { name: "egg-mayo", stock: 2, price: 5000 },
    { name: "shrimp", stock: 0, price: 8000 },
  ],
  sell: function (num) {
    this.sales = this.sales + this.menu[num - 1].price;
    this.menu[num - 1].stock = this.menu[num - 1].stock - 1;
    console.log(
      `${this.menu[num - 1].name}이 ${
        this.menu[num - 1].price
      }으로 판매되었습니다`
    );
    console.log(`현재 매출${this.sales}입니다.`);
  },
};
*/
// 👇 지하철 샌드위치 가게를 객체로 표현
const subway = {
  // ✅ 누적 매출을 저장할 변수
  sales: 0,

  // ✅ 메뉴 배열: 각각 이름, 재고, 가격을 가진 객체
  menu: [
    { name: "club", stock: 3, price: 7000 },
    { name: "blt", stock: 2, price: 7500 },
    { name: "egg-mayo", stock: 2, price: 5000 },
    { name: "shrimp", stock: 0, price: 8000 }, // 재고 0이니까 판매 안 됨
  ],

  // ✅ 샌드위치를 판매하는 메서드
  sell: function (num) {
    // 메뉴 배열에서 해당 번호의 메뉴 가져오기 (배열은 0부터 시작하니까 -1)
    const item = this.menu[num - 1];

    // 👉 재고가 1개 이상일 때만 판매 가능
    if (item.stock > 0) {
      item.stock = item.stock - 1; // 재고 1개 줄이기
      this.sales += item.price; // 매출 증가

      // ✅ 판매 성공 메시지 출력
      console.log(`${item.name}이 ${item.price}원으로 판매되었습니다.`);
      console.log(`남은 재고: ${item.stock}개`);
      console.log(`현재 매출: ${this.sales}원`);
    } else {
      // ❌ 재고가 없으면 판매 불가
      console.log(`${item.name}은(는) 재고가 없습니다!`);
    }
  },
  // ✅ 📦 재고 충당 함수
  restock: function (num) {
    const item = this.menu[num - 1];
    item.stock = item.stock + 1;
    console.log(
      `${item.name} 재고가 1개 추가되었습니다. 현재 재고: ${item.stock}개`
    );
  },
};
subway.sell(1); // club 판매
subway.restock(4); // shrimp 재고 +1
subway.sell(4); // shrimp 판매
subway.sell(4); // shrimp 판매
