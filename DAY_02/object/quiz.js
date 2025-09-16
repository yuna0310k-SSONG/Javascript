/*
const mbti1 = prompt("E? I?");
const mbti2 = prompt("S? N?");
const mbti3 = prompt("T? F?");
const mbti4 = prompt("P? J?");

const mbti = {
  e: "외향적",
  i: "내향적 ",
  s: "감각적",
  n: "직관적",
  t: "이성적",
  f: "감성적",
  j: "계획적",
  p: "즉흥적",
};

alert(`${mbti[mbti1]}${mbti[mbti2]}${mbti[mbti3]}${mbti[mbti4]}`);
*/
const year = +prompt("몇 년생 인가요?");
const myZodiac = year % 12;
const zodiac = {
  0: "원숭이띠",
  1: "닭띠",
  2: "개띠",
  3: "돼지띠",
  4: "쥐띠",
  5: "소띠",
  6: "호랑이띠",
  7: "토끼띠",
  8: "용띠",
  9: "뱀띠",
  10: "말띠",
  11: "양띠",
};

alert(`당신은 ${zodiac[myZodiac]}입니다.`);
