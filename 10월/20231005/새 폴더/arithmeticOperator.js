let num = 1;
num++; //num = num + 1
console.log(num);

num--; //num = num - 1
console.log(num);

let x = 3;
let y = 4;
// x+1
++x + y++;
// (x+1) + y + 1
console.log(x + y);

let a = 3;
let b = a++;
console.log("a:" + a, "b:" + b);

let w = 10;
let z = w-- + 5 + --w + --w; // 8+5+9+8 =30
console.log(w, z);

let k = 5;
let l = k++ - 3 + ++k; // (5-3)+((5+1)+1) = 9, 6-3+6 = 9
k++; //(((5+1)+1)+1) = 8
console.log(k, l);
