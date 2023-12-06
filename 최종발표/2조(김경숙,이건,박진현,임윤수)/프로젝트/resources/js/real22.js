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
// 선
const data = [
  { title: "DOCTYPE 자동완성", url: "도타입 완성.gif" },
  { title: "들여쓰기", url: "들여쓰기 완성.gif" },
  { title: "줄복사", url: "줄복사 완성.gif" },
  { title: "멀티커서", url: "멀티커서 완성.gif" },
  { title: "텍스트 찾기", url: "텍스트찾기 완성.gif" },
  { title: "설정창열기", url: "설정창 완성.gif" },
  { title: "터미널 열기", url: "터미널열기 완성.gif" },
  { title: "한줄복사", url: "줄복사 완성.gif" },
  { title: "한줄이동", url: "줄이동 완성.gif" },
  { title: "단어삭제", url: "단어 삭제 완성.gif" },
  { title: "문단삭제", url: "줄삭제 완성.gif" },
  { title: "줄 바꿈", url: "줄바꿈 완성.gif" },
];

const list = document.getElementById("list");
const title = document.getElementById("title");
const image = document.getElementById("image");
const pTag = document.getElementById("pTag");
console.log(list);

for (let i = 0; i < data.length; i++) {
  title.innerHTML += `<h4></h4>`;
  list.innerHTML += `<li class="button"><img src="${data[i].url}" class="noneDisplay"/><p class="blockDisplay">${data[i].title}</p></li>`;
}
const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // image.src = data[i].url;
    // title.textContent = data[i].title;
    // for (let j = 0; j < buttons.length; j++) {
    //   buttons[j].classList.remove("click");
    // }
    // image.classList.add("click");

    for (let j = 0; j < buttons.length; j++) {
      // buttons[j].classList.add("noneDisplay");
      // buttons[j].lastElementChild.classList.remove("noneDisplay");
      buttons[j].lastElementChild.classList.add("blockDisplay");
      buttons[j].firstElementChild.classList.add("noneDisplay");
      buttons[j].firstElementChild.classList.remove("blockDisplay");
    }
    buttons[i].lastElementChild.classList.add("noneDisplay");
    buttons[i].lastElementChild.classList.remove("blockDisplay");
    buttons[i].firstElementChild.classList.remove("noneDisplay");
    buttons[i].firstElementChild.classList.add("blockDisplay");
  });
}
