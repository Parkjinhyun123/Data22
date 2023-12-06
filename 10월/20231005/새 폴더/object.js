//객체 리터널을 이용해서 객체 생성과 동시에 프로퍼티 설정
let temp = {
  test: "test",
};

var myCar = {
  model: "bmw",
  color: "red",
  hp: 100,
  temp: temp,
};

let person = {};
let person2 = new Object();

// 객체 생성 후 프로퍼티 추가 방법1
person.age = 20;
person.name = "이름";

// 객체 생성 후 프로퍼티 추가 방법2
person["addr"] = "대전광역시 중구 선화동";
person["tel"] = "010-1234-5678";

// 객체의 값을 가져오는 방법
console.log(person);
console.log(person["name"] + person["age"] + person["addr"] + person["tel"]);
document.write(
  "<h3>저의 이름은 " +
    person["name"] +
    "이고 나이는 " +
    person["age"] +
    "이며, 주소는 " +
    person["addr"] +
    "입니다. <br>그리고 전화번호는 " +
    person["tel"] +
    "입니다</h3>"
);

console.log(myCar);
document.write(myCar.model + "<br/>");
document.write(myCar.color + "<br/>");
document.write(myCar.hp + "<br/>");
document.write(myCar.temp.test + "<br/>");

console.log(Object.keys(myCar)); //Object의 key값을 배열로 반환
console.log(Object.values(myCar)); //Object의 value 값을 배열로 반환
console.log(Object.entries(myCar)); //Object의 key, value 쌍을 배열로 반환
