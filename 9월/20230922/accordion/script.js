const listItem = document.querySelectorAll(".list-item");
console.log(listItem);

for (let i = 0; i < listItem.length; i++) {
  // .list-item 클래스를 가진 모든 요소를 가져와서 반복문처리
  listItem[i].addEventListener("click", () => {
    //그 요소중 i번째 요소를 클릭했을때
    for (let j = 0; j < listItem.length; j++) {
      listItem[j].classList.remove("selected");
      // *list-item클래스를 가진 모든 요소에서 selected제거
    }
    listItem[i].classList.add("selected");
    // *list-item클래스를 가진 모든 요소에 selected추가
  });
}

// listItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("selected");
//   });
// });

// listItem.forEach(item => {
//     item.addEventListener('click', ()=> {
//         listItem.forEach(list => list.classList.remove('selected'))
//         item.classList.add('selected')
//     })
// })

//변수
//변수를 선언하는 방법
//let y = 0;
// y = 1;
//console.log (y)
