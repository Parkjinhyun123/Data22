function add(a, b) {
  var sum = a + b;
  return sum;
}

function sub(a, b) {
  var res = a - b;
  return res;
}

window.onload = function () {
  var sum = add(4, 5);
  document.write("add=" + sum + "<br/>");
  var res = sub(10, 4);
  document.write("sub=" + res);
};
