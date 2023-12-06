// 단축키
const shortCut = document.querySelector(".lg-shortcut");
const lgShorCut = document.querySelectorAll(".lg-h2-shortcut");
const imgBox = document.querySelectorAll(".lg-imgbox");
let isShortCutOpen = false;

for (let i = 0; i < lgShorCut.length; i++) {
  lgShorCut[i].addEventListener("click", () => {
    imgBox[i].classList.toggle("lg-modal");
  });
}
