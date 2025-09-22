/*
const a = prompt("단어 입력");
console.log(a.toUpperCase());
*/

//quiz 01
const word1 = prompt("1. 단어입력");
if (word1.length > 10) {
  console.log("단어가 길어유");
} else {
  console.log(`${word1.toUpperCase()}`);
}

//quiz 02
const word2 = prompt("2. 문장입력");
console.log(word2.split(" "));

//quiz 03
const word3 = prompt("3. 단어입력");
if (word3 === word3.toUpperCase()) {
  console.log(word3.toLowerCase());
} else {
  console.log(word3.toUpperCase());
}

//quiz 04
const word4 = prompt("4. 이메일입력");
if (word4.includes("@")) {
  console.log("올바른 이메일 입니다.");
} else {
  console.log("바르지 않는 이메일 입니다.");
}
