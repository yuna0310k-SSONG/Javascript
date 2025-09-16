// short-circuit [단축평가]
/*
const user_name = window.prompt("닉네임이 뭐예요?");
const result = user_name || "guest";
window.alert(`${result}님 환영합니다!`);
*/

const pw = +window.prompt("화장실 비밀번호는??");
pw == 1215 && window.alert(`열림!`);
