/*const happy = () => {
  console.log("해피해피해피");
  console.log("해피해피해피");
  console.log("해피해피해피");
};

const test = (x) => {
  console.log("테스트 시작");
  x();
  console.log("테스트 끝");
};

test(happy);
test(happy());
*/
const kimchiRice = () => {
  console.log("김치 넣기");
  console.log("밥 넣기");
  console.log("달달 볶기");
};
const ramen = () => {
  console.log("물 넣기");
  console.log("스프 넣기");
  console.log("3분 기다리기");
};
const eggFri = () => {
  console.log("달걀 깨기");
  console.log("후라이펜에 달걀 올리기");
  console.log("소금 뿌리기");
  console.log("기다 리기");
};
const cook = (recipe) => {
  console.log("🍴요리 시작🍴");
  recipe();
  console.log("🍽요리 완성🍽");
};

cook(kimchiRice);
