const dog = "bulldog";
const a = dog.toUpperCase();
console.log(a);

const cat = "cheese";
const b = cat.replaceAll("e", "😼");
console.log(b);

const coffee = "americano";

coffee[1]; //"m"
coffee.length; //역할: 몇글짜임?   리턴:9

coffee.includes("i"); //역할: i를 포함하냐?  리턴 : Boolean (true/false)
coffee.startsWith("m"); //역할: m으로 시작 하냐?  리턴 : Boolean (true/false)
coffee.endsWith("o"); //역할: o로 끝나냐?  리턴 : Boolean (true/false)
coffee.indexOf("r"); //역할: r이 몇번째에 있는지?  리턴 : Number

coffee.slice(0, 4); //역할 0부터 3까지 짤라서 보려줌  리턴 : amer
coffee.replace("a", "k"); //역할: a를 k로 바꿔줌  리턴 :kmericano
coffee.replaceAll("a", "k"); //역할: 모든 a를 k로 바꿔줌  리턴 :kmericano
coffee.split("i"); //역할: i 기준으로 찢음   리턴 : ['amer','cano']
" x ".trim(); //역할: 공백제거   리턴: "x"
coffee.repeat(3); //역할: 반복  리턴: americanoamericanoamericano
coffee.toUpperCase(); // 대문자화 하기  리턴: AMERICANO
coffee.toLowerCase(); //소문자화 하기   리턴: americano
