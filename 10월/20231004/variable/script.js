var sum = 0;

function add(a, b) {
  sum = a + b;
}

function sub(a, b) {
  sum = a - b;
}

window.onload = function () {
  add(4, 5);
  document.write("add=" + sum + "<br/>");
  sub(10, 4);
  document.write("sub=" + sum);
};
