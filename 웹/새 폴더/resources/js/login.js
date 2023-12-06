// 기본정보 관련 변수 선언
const memberId = document.querySelector("#id");
const password = document.querySelector("#password");

// 로그인
function loginCheck() {
  if (memberId.value == "") {
    alert("아이디를 입력해주세요.");
    return false;
  } else if (password.value == "") {
    alert("비밀번호를 입력해주세요.");
    password.focus();
    return false;
  } else {
    setTimeout(function () {
      location.href = "indexLogin.html";
      return true;
    }, 5);
  }
}
