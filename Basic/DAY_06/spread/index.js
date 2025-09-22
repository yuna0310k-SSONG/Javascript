// spread 연산자 : ...

//1. 문자열 스프레드
const rabbit = [..."rabbit"];
console.log(rabbit);

//2. 배열 스프레드
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

//결과 : [1,2,3,4,5,6,7,8,9,10]
const result = [...arr1, ...arr2];
console.log(result);

//3.오브젝트 스프레드
const icecream = "민트초코";
const beskin = { icecream: icecream }; //{icecream = "민트초코"}
//key: value가 같으면 생략 가능
const beskin1 = { icecream }; //{icecream = "민트초코"}

const candy = { name: "sunkist", flavor: "lemon", kcal: 40 };
const chocolate = { name: "hershey", kcal: 100 };
const snack = { ...candy, ...chocolate };
///{ name: "sunkist", flavor: "lemon", kcal: 40, name: "hershey", kcal: 100 }
// 에서 중복값은 뒤에 값이 나온다 (앞에값 자동 삭제 됨)
console.log(snack);
// 최종 결과 :{ flavor: "lemon", name: "hershey", kcal: 100 }
