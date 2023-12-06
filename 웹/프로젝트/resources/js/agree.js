const agreeA = document.querySelector("#agreeA");
const agreeB = document.querySelector("#agreeB");

const checkedBtn = document.querySelector(".agree-btn");
function agreeChecked() {
  const agreeChecked1 = agreeA.checked;
  const agreeChecked2 = agreeB.checked;
  console.log(agreeChecked1);
  if (agreeChecked1 == false) {
    alert("회원가입약관에 동의해주세요.");
  } else if (agreeChecked2 == false) {
    alert("개인정보 취급방침에 동의해주세요.");
  } else {
    location.href = "member.html";
  }
}
