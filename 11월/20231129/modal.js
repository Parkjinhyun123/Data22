const boxs = document.querySelectorAll(".box");
const text = document.querySelector(".text");
const overlay = document.querySelector(".overlay");
const imgName = document.querySelector("#boxName");

let isModalOpen = false;

console.log(boxs);

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", () => {
    boxs[i].classList.toggle("modal");
  });
}

if (isModalOpen) {
  isModalOpen = false;
  text.classList.remove("visible");
} else {
  isModalOpen = true;
  text.classList.remove("visible");
}

// function onClick(box) {
//   console.log(box);
//   for (i = 1; i < box.length; i++) {
//     if (isModalOpen) {
//       isModalOpen = false;
//       box.classList.remove("modal");
//       // text.classList.remove("visible");
//     } else {
//       isModalOpen = true;
//       box.classList.add("modal");
//       setTimeout(() => {
//         // text.classList.add("visible");
//       }, 500);
//     }
//   }
// }

// function checkStars(clickIndex) {
//   console.log("click", clickIndex);
//   stars.forEach((star, i) => {
//     // 조건식, 클릭된 별의 인덱스보다 작거나 같으면 active 클래르를 추가(add)하고
//     // 크면, active 클래스를 삭제(remove)한다
//     if (i <= clickIndex) {
//       star.classList.add("modal");
//     } else {
//       star.classList.remove("modal");
//     }
//   });
// }
