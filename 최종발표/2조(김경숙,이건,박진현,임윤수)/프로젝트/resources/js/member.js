// 기본정보 관련 변수 선언
const memberId = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password2");
const memberName = document.querySelector("#name");
const firstMail = document.querySelector("#email");
const phoneNum = document.querySelector("#phoneNumber");
const submit = document.querySelector(".subBtn");
const numberInput = document.querySelector(".input_target");
const startBtn = document.querySelector(".get_number");
const pass = document.querySelector(".pass");
const addr = document.querySelector("#sample6_address");

// 중복확인 관련 변수 선언

// 이메일 관련 변수 선언
const selected = document.querySelector("#tmp_mail");
const self = document.querySelector("#email2");

// 타이머 관련 변수 선언
const remainingMin = document.querySelector("#remaining_min");
const remainingSec = document.querySelector("#remaining_sec");
const completeBtn = document.querySelector("#complete");

let time = 180;
let timeId;
let min;
let sec;

// 정규식

const phoneNumberPattern = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/g;
const passwordPattern = /^[A-Za-z0-9]{4,12}$/g;

const idAjax = document.querySelector("#id_ajax");
// 중복확인
// idAjax.addEventListener("click", function () {
//   const checkId = document.querySelector("#id").value;
//   // console.log(!idPattern.test(checkId.value));
//   // console.log(notOkId.classList.contains("show"));
//   if (memberId.value == "") {
//     alert("아이디를 입력해주세요.");
//     setTimeout(function () {
//       memberId.focus();
//       return false;
//     }, 5);
//   } else if (!idPattern.test(checkId)) {
//     notOkId.classList.remove("hidden");
//     notOkId.classList.add("show");
//     if (okId.classList.contains("show") == true) {
//       okId.classList.remove("show");
//       okId.classList.add("hidden");
//     }
//     return false;
//   } else {
//     okId.classList.remove("hidden");
//     okId.classList.add("show");
//     if (notOkId.classList.contains("show") == true) {
//       notOkId.classList.remove("show");
//       notOkId.classList.add("hidden");
//     }
//     return true;
//   }
// });

// 메일 도메인 선택
selected.addEventListener("change", function (e) {
  if (e.target.value !== "other") {
    self.value = e.target.value;
    self.disabled = true;
  } else {
    self.value = "";
    self.disabled = false;
  }
});

// 휴대폰 자동 하이픈
const autoHyphen = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
};

// 휴대폰 정규 표현식 검사 후 타이머 시작
function takeTarget() {
  const phoneNum = document.querySelector("#phoneNumber").value;
  // console.log(!phoneNumberPattern.test(phoneNum));
  if (phoneNumberPattern.test(phoneNum) == true) {
    alert("인증번호가 발송되었습니다.");
    timeId = setInterval(function () {
      if (time > 0) {
        time = time - 1;
        min = Math.floor(time / 60);
        sec = String(time % 60).padStart(2, "0");
        remainingMin.innerText = min;
        remainingSec.innerText = sec;
        startBtn.disabled = true;
      }
    }, 1000);
  } else {
    alert("연락처를 입력해주세요.");
  }
}

// 인증완료 버튼

completeBtn.addEventListener("click", () => {
  if (numberInput.value == "") {
    alert("인증번호를 입력해주세요.");
  } else if (numberInput.value.length < 6) {
    alert("인증번호를 다시 입력해주세요.");
    numberInput.value = "";
  } else {
    alert("인증완료되었습니다.");
    completeBtn.disabled = true;
    clearInterval(timeId);
    if ((completeBtn.disabled = true)) {
      completeBtn.classList.add("disabled");
      clearInterval(timeId);
    }
  }
});

// 회원가입
// function submitCheck() {
//   // 정규식 input
//   const passwordVal = document.querySelector("#password").value;
//   // 아이디
//   if (memberId.value == "") {
//     alert("아이디를 입력해주세요.");
//     setTimeout(function () {
//       memberId.focus();
//       return false;
//     }, 5);
//   } else if (notOkId.classList.contains("show") == true) {
//     alert("중복확인을 해주세요.");
//     setTimeout(function () {
//       memberId.focus();
//       return false;
//     }, 5);
//     // 비밀번호
//   } else if (password.value == "") {
//     alert("비밀번호를 입력해주세요.");
//     setTimeout(function () {
//       password.focus();
//       return false;
//     }, 5);
//   } else if (password.value != passwordCheck.value) {
//     alert("비밀번호가 일치하지 않습니다.");
//     setTimeout(function () {
//       passwordCheck.focus();
//       return false;
//     }, 5);
//   } else if (!passwordPattern.test(passwordVal)) {
//     alert("사용하실 수 없는 비밀번호입니다.");
//     setTimeout(function () {
//       password.focus();
//       return false;
//     }, 5);
//   } else if (memberId.value == password.value) {
//     alert("아이디와 비밀번호는 다르게 해주세요.");
//     setTimeout(function () {
//       memberId.focus();
//       return false;
//     }, 5);
//     // 이름
//   } else if (memberName.value == "") {
//     alert("이름을 입력해주세요.");
//     setTimeout(function () {
//       memberName.focus();
//       return false;
//     }, 5);
//     // 이메일
//   } else if (firstMail.value == "") {
//     alert("이메일을 입력해주세요.");
//     setTimeout(function () {
//       firstMail.focus();
//       return false;
//     }, 5);
//   } else if (selected.value == "") {
//     alert("이메일을 선택해주세요.");
//     setTimeout(function () {
//       selected.focus();
//       return false;
//     }, 5);
//   } else if (selected.value == "other") {
//     if (self.value == "") {
//       alert("이메일을 입력해주세요.");
//       setTimeout(function () {
//         self.focus();
//         return false;
//       }, 5);
//     }
//     // 연락처
//   } else if (phoneNum.value == "") {
//     alert("연락처를 입력해주세요.");
//     setTimeout(function () {
//       phoneNum.focus();
//       return false;
//     }, 5);
//   } else if (completeBtn.disabled != true) {
//     alert("인증을 완료해주세요.");
//     setTimeout(function () {
//       numberInput.focus();
//       return false;
//     }, 5);

//     // 마무리
//   } else if (addr.value == "") {
//     alert("주소를 입력해주세요.");
//     setTimeout(function () {
//       addr.focus();
//       return false;
//     }, 5);
//   } else {
//     alert("회원가입되셨습니다.");
//     setTimeout(function () {
//       return true;
//     }, 5);
//   }
// }

// 아이디찾기
function submitCheckId() {
  if (memberName.value == "") {
    alert("이름을 입력해주세요.");
    setTimeout(function () {
      memberName.focus();
      return false;
    }, 5);
  } else if (firstMail.value == "") {
    alert("이메일을 입력해주세요.");
    setTimeout(function () {
      firstMail.focus();
      return false;
    }, 5);
  } else if (selected.value == "") {
    alert("이메일을 선택해주세요.");
    setTimeout(function () {
      selected.focus();
      return false;
    }, 5);
  } else if (selected.value == "other") {
    if (self.value == "") {
      alert("이메일을 입력해주세요.");
      setTimeout(function () {
        self.focus();
        return false;
      }, 5);
    }
  } else if (numberInput.value == "") {
    alert("연락처를 입력해주세요.");
    setTimeout(function () {
      numberInput.focus();
      return false;
    }, 5);
  } else {
    alert("인증되셨습니다.");
    setTimeout(function () {
      passConfirm = confirm("비밀번호도 찾으시겠습니까?");
      if (passConfirm == true) {
        location.href = "findPassword.html";
      } else {
        location.href = "../../index.html";
      }
    }, 5);
  }
}

// 비밀번호찾기
function submitCheckPass() {
  if (memberId.value == "") {
    alert("아이디를 입력해주세요.");
    setTimeout(function () {
      memberId.focus();
      return false;
    }, 5);
  } else if (memberName.value == "") {
    alert("이름을 입력해주세요.");
    setTimeout(function () {
      memberName.focus();
      return false;
    }, 5);
  } else if (firstMail.value == "") {
    alert("이메일을 입력해주세요.");
    setTimeout(function () {
      firstMail.focus();
      return false;
    }, 5);
  } else if (selected.value == "") {
    alert("이메일을 선택해주세요.");
    setTimeout(function () {
      selected.focus();
      return false;
    }, 5);
  } else if (selected.value == "other") {
    if (self.value == "") {
      alert("이메일을 입력해주세요.");
      setTimeout(function () {
        self.focus();
        return false;
      }, 5);
    }
  } else if (numberInput.value == "") {
    alert("연락처를 입력해주세요.");
    setTimeout(function () {
      numberInput.focus();
      return false;
    }, 5);
  } else {
    alert("인증되셨습니다.");
    setTimeout(function () {
      location.href = "../../index_login.html";
      return true;
    }, 5);
  }
}

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
      location.href = "../../indexLogin.html";
      return true;
    }, 5);
  }
}
