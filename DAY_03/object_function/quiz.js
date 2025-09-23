const venti = {
  sales: 0,
  menus: [
    { name: "아메리카노", price: 2000 },
    { name: "라떼", price: 3000 },
    { name: "에이드", price: 3800 },
  ],
  sell: function (num) {
    this.sales = this.sales + this.menus[num - 1].price;
    console.log(
      `${this.menus[num - 1].name}이 ${
        this.menus[num - 1].price
      }으로 판매되었습니다`
    );
    console.log(`현재 매출${this.sales}입니다.`);
  },
};

venti.sell(2);
venti.sell(2);
venti.sell(2);
venti.sell(3);
