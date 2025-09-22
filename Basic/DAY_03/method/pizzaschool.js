const pizza = {
  sales: 0,

  menu: [
    { name: "cheese", stock: 10, price: 9000 },
    { name: "Pepperoni", stock: 5, price: 11000 },
    { name: "popato", stock: 1, price: 15000 },
  ],

  sell: function (num) {
    const item = this.menu[num - 1];

    if (item.stock > 0) {
      item.stock = item.stock - 1; //재고 하나 줄이기
      this.sales = this.sales + item.price; //매출 추가

      console.log(`${item.name}피자가 판매되었습니다.`);
      console.log(`현재 매출: ${this.sales}원`);
    } else {
      console.log(`${item.name}피자가 품절입니다.`);
    }
  },
  restock: function (num) {
    const item = this.menu[num - 1];

    item.stock = item.stock + 1;

    console.log(
      `${item.name}피자 재고가 1개 추가되었습니다. 현재 재고: ${item.stock}개`
    );
  },
  addMenu: function (name, stock, price) {
    if (typeof name != "string" || name == "" || stock <= 0 || price <= 0) {
      console.log("올바르지 않은 데이터");
    } else {
      this.menu.push({ name: name, stock: stock, price: price });
      console.log(`${name} 피자가 메뉴에 추가되었습니다!`);
    }
  },
};
pizza.addMenu("불고기", 2, 15000);
pizza.sell(2);
pizza.sell(3);
pizza.addMenu("corn", 1, 16000);
pizza.sell(3);
console.log(pizza.menu);
