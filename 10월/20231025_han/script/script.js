// #modal_open이 눌리면 #modal_back의 display 값이 "block"으로 변경

// document.getElementById("modal_open").onclick = function () {
//   document.getElementById("modal_back").style.display = "block";
// };

// #modal_close가 눌리면 #modal_back의 display 값이 "none"으로 변경
// document.getElementById("modal_close").onclick = function () {
//   document.getElementById("modal_back").style.display = "none";
// };

$("#modal_open").click(function () {
  $("#modal_back").fadeIn(function () {
    $("#modal_win").animate({ marginTop: 0 }, 400);
  });
});
$("#modal_close").click(function () {
  $("#modal_back").fadeOut();
});
