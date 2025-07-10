// 함수 - 자바의 메서드와 똑같음
function showMsg() {
  let msg = "하이";
  console.log(msg);
}
// 함수호출
showMsg();

// msg변수는 showMsg함수의 지역변수이므로 사용못함
// --->>>  console.log(msg);  <<<---

let name = `홍길동`;

function showInfo() {
  let name = "고길동";
  let msg = `안녕하세요 ${name}님`;
  console.log(msg);
}

console.log(name);
showInfo();
console.log(name);

// 매개변수와 리턴
function sum(x, y) {
  console.log(x + y);
}

sum(10, 5);

function sum2(x, y) {
  return x + y;
}

let result = sum2(20, 5);
console.log(result);
