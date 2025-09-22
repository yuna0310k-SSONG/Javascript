//quiz 01
const score = Number(window.prompt("1)점수가 어떻게 되나요?"));
const result = score >= 60 ? "합격" : "불합격";
window.console.log(`1) ${result} 입니다`);

//quiz 02
const first_num = Number(window.prompt("2)첫번째 수는?"));
const second_num = Number(window.prompt("2)두번째 수는?"));
const result2 = first_num > second_num ? first_num : second_num;
window.console.log(`2) 더 큰수는 ${result2} 입니다`);

//quiz 03
const num = Number(window.prompt("3)확인 원하는 수는?"));
const result3 = num > 0 ? "양수" : num < 0 ? "음수" : "0";
window.console.log(`3) 입력한 수는 ${result3} 입니다`);

//quiz 04
const num1 = Number(window.prompt("4)홀-짝 확인 원하는 수는?"));
const result4 = num1 % 2 == 0 ? "짝수" : "홀수";
window.console.log(`4) 입력한 수는 ${result4} 입니다`);
