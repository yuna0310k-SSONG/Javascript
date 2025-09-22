//1
const def1 = (x) => {
  return x * 2;
};
//2
const def2 = (x) => {
  return x - 500;
};
//3
const def3 = (x, y) => {
  return x > y ? x : y;
};
//4
const def4 = (x) => {
  return x.length;
};
//5
const def5 = (x) => {
  return x.length > 10 ? "길어요" : "적당해요";
};
//6
const def6 = (str) => {
  return `${str}하다니 럭키비니잖아💛`;
};
//7
const def7 = (x, y) => {
  return x ** y;
};
//8
const def8 = (str) => {
  if (str.includes("a") || str.includes("b")) {
    return "A,B 포함";
  } else {
    return "A,B 미포함";
  }
};
//9
const def9 = (x) => {
  return [x * 1, x * 2, x * 3, x * 4, x * 5, x * 6, x * 7, x * 8, x * 9];
};
//10
const def10 = (str, x) => {
  return str.slice(0, x + 1);
};
