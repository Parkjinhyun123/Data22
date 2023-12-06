const exContent = document.querySelectorAll("ex-content");
const exTitle = document.querySelectorAll(".ex-title");
const exBody = document.querySelectorAll(".ex-codebody");

for (let i = 0; i < exTitle.length; i++) {
  exTitle[i].addEventListener("click", () => {
    exBody[i].classList.toggle("ex-modal");
  });
}
