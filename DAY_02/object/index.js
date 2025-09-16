// 기본타입 : String, Number, Boolean, Undefind, Null[없음]
// 참조타입 : object
/*
//[key - value]
// key 값은 중복 불가
// value 값은 중복 가능
const coffee = {
  name: "아메리카노",
  price: 3000,
  bean: "스페셜 원두",
};
const car = {
  name: "모델 Y",
  brand: "tesla",
  price: 60000000,
  color: "white",
};
console.log(car); //조회
console.log(car.color); // dot 접근
console.log(car["color"]); //bracket 접근
console.log(car.capacity); // 존재하지 않으면 undefind

car.options = "날개"; //추가
delete car.price; //삭제
car.color = "민트색"; //업데이트

// 선생님 이름
// 선생님 나이
// 선생님 MBTI
// 학생수
// 진행과목
// 수업시간
*/
const course = {
  name: " 자바스크립트",
  students: 12,
  time: "9:30 - 18:30",
  teacher: {
    name: "전수효T",
    age: "33",
    mbti: "entj",
  },
};
console.log(course.teacher.age);
