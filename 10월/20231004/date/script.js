var now = new Date();
document.write(now);

let year = now.getFullYear();
document.write("<br/>" + year);

let month = now.getMonth();
month = month + 1;
month = month >= 10 ? month : "0" + month;
document.write("<br/>" + month);

let date = now.getDate();
document.write("<br/>" + date);
date = date >= 30 ? date : "0" + date;

document.write("<br/>" + year + "-" + month + "-" + date);

let isoFormat = now.toISOString().split("T")[0];
// isoFormat = isoFormat.split('T');
// isoFormat = isoFormat[0];
document.write("<br/>" + isoFormat);
