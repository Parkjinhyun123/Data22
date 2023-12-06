// let a = 10;
// if (true) {
//   console.log(a);
// }

// let b = 10; // 전역변수
// if (true) {
//   console.log(b);
//   let b = 20; // 지역변수
// }

console.log(logMeassage());
console.log(typeof sumNumbers);

function logMeassage() {
  return "worked";
}

var sumNumbers = function () {
  return 10 + 20;
};
console.log(typeof sumNumbers);
