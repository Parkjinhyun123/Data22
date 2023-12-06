// 기본정보 관련 변수 선언
const idKey = "userId";
const memberId = document.querySelector("#id");
const password = document.querySelector("#password");
const remCheck = document.querySelector("#remember-check");
const loginInfo = localStorage.getItem(idKey);
// 로그인
function loginCheck() {
  if (memberId.value == "") {
    alert("아이디를 입력해주세요.");
    setTimeout(function () {
      memberId.focus();
      return false;
    }, 5);
  } else if (password.value == "") {
    alert("비밀번호를 입력해주세요.");
    setTimeout(function () {
      password.focus();
      return false;
    }, 5);
  } else {
    setTimeout(function () {
      location.href = "../../index_login.html";
      return true;
    }, 5);
  }
}
// 아이디저장
if (loginInfo != null) {
  memberId.value = loginInfo;
  console.log("아이디");
}

function confirmSave(checkbox) {
  let isRemember;
  if (checkbox.checked) {
    isRemember = confirm(
      "이 PC에 로그인 정보를 저장하시겠습니까? PC방등의 공공장소에서는 개인정보가 유출될 수 있으니 주의해주십시오."
    );
    if (!isRemember) checkbox.checked = false;
  }
}
