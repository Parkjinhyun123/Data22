const contentName = document.querySelectorAll(".body_name");
const showContent = document.querySelectorAll(".body_content");

for (let i = 0; i < contentName.length; i++) {
  contentName[i].addEventListener("click", () => {
    for (let j = 0; j < contentName.length; j++) {
      showContent[j].classList.remove("show");
    }
    showContent[i].classList.add("show");
  });
}
