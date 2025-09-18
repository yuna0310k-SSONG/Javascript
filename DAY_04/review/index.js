//quiz 01. 영화 제목과 좌석 그리고 시간을 넣으면 오브젝트 타입으로 돌려주는 함수
// 단, 타입 위배시 문자열 "에러입니다"

function makeTicket(tittle, seat, time) {
  if (
    typeof tittle != "string" ||
    typeof seat != "string" ||
    typeof time != "string"
  )
    return "에러입니다";
  return {
    tittle: tittle,
    seat: seat,
    time: time,
    endtime: String(parseInt("time") + 2) + ":00",
  };
}
