const slider = document.querySelector(".gallery");
let startX = 0;
let scrorllLeft = 0;
const SCROLL_SPEED = 3;

function doScroll(e) {
  e.preventDefault();
  const x = e.pageX;
  const move = x - startX * SCROLL_SPEED;
  slider.scrollLeft = scrorllLeft - move;
}
slider.addEventListener("mousedown", (e) => {
  slider.addEventListener("mousemove", doScroll);
  slider.classList.add("onDrag");
  startX = e.pageX;
  scrorllLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  slider.removeEventListener("mousemove", doScroll);
  slider.classList.remove("onDrag");
});

slider.addEventListener("mouseleave", () => {
  slider.removeEventListener("mousemove", doScroll);
  slider.classList.remove("onDrag");
});
