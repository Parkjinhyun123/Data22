// 네비바
window.addEventListener("scroll", function () {
  const navi = document.querySelector(".navigation");
  const logo = document.querySelector(".site_logo");
  const naviHeight = navi.getBoundingClientRect().height;
  if (window.scrollY > naviHeight) {
    navi.classList.add("active");
    logo.classList.add("active");
    navi.classList.remove("deactive");
  } else {
    navi.classList.remove("active");
    logo.classList.remove("active");
    navi.classList.add("deactive");
  }
});

const hambugerBtn = document.querySelector(".hamburger-button");
const gnb = document.querySelector(".gnb");
const account = document.querySelector(".account");
const gnbWidth = gnb.getBoundingClientRect().width;
hambugerBtn.addEventListener("click", function () {
  hambugerBtn.classList.toggle("active");
  gnb.classList.toggle("vh");
  const activeCheck1 = gnb.classList;
  const activeCheck2 = hambugerBtn.classList;
  if (activeCheck1.contains("vh") && activeCheck2.contains("active")) {
    setTimeout(() => {
      account.classList.add("active");
    }, 300);
  } else {
    account.classList.remove("active");
  }
});

const mainMenu = document.querySelectorAll(".gmain");
const subMenu = document.querySelectorAll(".gsub");
mainMenu.forEach((e) => {
  e.addEventListener("click", function () {
    subMenu.forEach((i) => {
      i.classList.toggle("show");
    });
  });
});
// 로그아웃
const stop = document.querySelector("body");
const logOut = document.querySelector("#log-out");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal_body");
const btnOpenModal = document.querySelector(".btn-open-modal");
const logOutYes = document.querySelector("#modalTrue");
const logOutNo = document.querySelector("#modalFalse");

function logOut_btn() {
  modal.style.display = "flex";
  modal.style.zIndex = 10000;
  modalBody.style.zIndex = 200;
  stop.classList.add("break");
}

function closeModal() {
  modal.style.display = "none";
}

function log_out() {
  location.href = "../../index.html";
}

function log_out_cancle() {
  modal.style.display = "none";
  stop.classList.remove("break");
}

console.log("%cദ്ദി❁´ω`❁)", "color: #4082ed;font-size:24px;font-weight:700;");
