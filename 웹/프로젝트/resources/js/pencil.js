window.addEventListener("scroll", function () {
  const navi = document.querySelector(".navigation");
  const naviHeight = navi.getBoundingClientRect().height;
  if (window.scrollY > naviHeight) {
    navi.classList.add("active");
    navi.classList.remove("deactive");
  } else {
    navi.classList.remove("active");
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
  account.classList.toggle("active");
});
// 단축키
// const data = [
//   { title: "Alt + Z 들여쓰기", url: "들여쓰기 완성.gif" },
//   { title: "들여쓰기", url: "들여쓰기 완성.gif" },
//   { title: "들여쓰기", url: "들여쓰기 완성.gif" },
// ];

const listItem = document.querySelector(".list-item");
const title = document.querySelectorAll(".title");
const image = document.querySelector(".liImage");
const imgTitle = document.querySelector(".hItem");
// const pTag = document.querySelector(".pTag");

function showImg() {
  for (let i = 0; i < title.length; i++) {
    imgTitle.addEventListener("click", function () {
      image.classList.toggle("selected");
    });
  }
  // imgTitle.forEach((copy) => {
  //   copy.addEventListener("click", (e) => {
  //     image.classList.toggle("selected");
  //   });
  // });
}

// function toggle() {
//   pTag.addEventListener("click", function () {
//     title.classList.toggle("selected");
//   });
// }

// 예제 파일 자바스트립트 시작
let totalPage = 100;
let pageNum = 20;
let blockNum = 10;
let totalBlock = totalPage % 20 == 0 ? totalPage / 20 : totalPage / 20 + 1;
let currentBlock = 1;

let data = new Array();

for (let i = 1; i <= totalPage; i++) {
  data[i] = {
    noticeNum: i,
    title: "제목" + i,
    writer: "작성자" + i,
    date_created: "2022-10-07",
    Lookkup_num: i,
    like: i,
  };
}
