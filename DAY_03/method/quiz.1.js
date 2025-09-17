//quiz 01
const pw = prompt("password:");

if (pw.length >= 4 && pw.length <= 12) {
  if (pw.includes("@") || pw.includes("!") || pw.includes("#")) {
    if (pw.startsWith("it")) {
      console.log("올바르게 비밀번호를 만들었다👻");
    } else {
      console.log("비밀번호 시작이이 it가 아닙니다");
    }
  } else {
    console.log("비밀번호에 @,!,# 이 없습니다");
  }
} else {
  console.log("비밀번호 길이가 맞지 않습니다");
}
/*
const pw = prompt("비밀번호를 입력하세요:");

// ✅ 조건 1: 비밀번호 길이가 4자 이상 12자 이하인지 확인
if (!(pw.length >= 4 && pw.length <= 12)) {
  console.log("❌ 비밀번호 길이가 맞지 않습니다 (4~12자)");
}

// ✅ 조건 2: 특수문자 @, !, # 중 하나라도 포함되었는지 확인
else if (!pw.includes("@") && !pw.includes("!") && !pw.includes("#")) {
  console.log("❌ 비밀번호에 @, !, # 중 하나가 포함되어야 합니다");
}

// ✅ 조건 3: 비밀번호가 'it'로 시작하는지 확인
else if (!pw.startsWith("it")) {
  console.log("❌ 비밀번호는 'it'로 시작해야 합니다");
}

// ✅ 모든 조건을 만족했을 때
else {
  console.log("✅ 올바르게 비밀번호를 만들었습니다 👻");
}
*/
