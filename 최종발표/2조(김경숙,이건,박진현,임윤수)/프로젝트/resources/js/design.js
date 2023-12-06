const SDMain = document.querySelectorAll(".sideMain");
const SubDCFIMain = document.querySelectorAll(".subDCFIMain");

// .sideMain 클래스를 가진 모든 요소를 가져와서 반복문처리
// 그 요소 중 A번째 요소를 클릭했을 때
// .sideMain 클래스를 가진 모든 요소를 반복문처리
// .sideMain 클래스를 가진 모든 요소에서 selected 클래스를 제거
// 클릭한 A번째 요소에 selected 클래스 추가

for (let A = 0; A < SDMain.length; A++) {
  SDMain[A].addEventListener("click", () => {
    for (let B = 0; B < SDMain.length; B++) {
      SDMain[B].classList.remove("selected");
    }
    SDMain[A].classList.add("selected");
  });
}

for (let C = 0; C < SubDCFIMain.length; C++) {
  SubDCFIMain[C].addEventListener("click", () => {
    for (let D = 0; D < SubDCFIMain.length; D++) {
      SubDCFIMain[D].classList.remove("selected");
    }
    SubDCFIMain[C].classList.add("selected");
  });
}
