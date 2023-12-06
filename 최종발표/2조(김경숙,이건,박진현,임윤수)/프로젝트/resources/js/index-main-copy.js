const spanTag = document.querySelectorAll(".spanTag");

window.onload = () => {
  let timer = 100;
  spanTag.forEach((item) => {
    item.style.animation = `panimation 500ms ${(timer += 80)}ms forwards`;
  });
};
