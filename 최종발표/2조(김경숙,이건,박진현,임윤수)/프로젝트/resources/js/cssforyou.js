const forBox = document.querySelectorAll(".for-box-you");
const YouContent = document.querySelectorAll(".foryou-lg-content-item");
const forImg = document.querySelectorAll(".forImg");

for (let i = 0; i < YouContent.length; i++) {
  YouContent[i].addEventListener("click", () => {
    // forImg[i].classList.toggle("for-modal");
    forBox[i].classList.toggle("for-modal");
  });
}
