const age = Number(window.prompt("나이는?")) >= 20 ? "성인" : "미성년자";
window.console.log(`당신은 ${age}입니다`);

const height =
  Number(window.prompt("키는?")) >= 140 ? "탑승가능" : "탑승불가능";
window.console.log(`해당 놀이기구는 ${height}입니다`);

const num = Number(window.prompt("숫자는?")) > 0 ? "양수" : "음수";
window.console.log(`입력하신 수는 ${num}입니다`);
