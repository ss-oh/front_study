// 함수 선언문 -js를 읽을때 먼저 선언문을 찾고 읽기 때문에 어떤 위치에 있던 사용가능
function hello() {
  console.log("hello");
}

// 함수 표현식
let hi = function () {
  console.log("hi");
};

// 콜백 함수
function yes() {
  console.log("예");
}

let no = function () {
  console.log("아니오");
};

function check(question, ok, cancle) {
  if (question === "y") {
    ok();
  } else {
    cancle();
  }
}

check("y", yes, no);

function buy(item, price, stock, callback) {
  console.log(`${item}을 ${stock}개 구매함`);

  let total = price * stock;
  callback(total);
}

function pay(n) {
  console.log(`총 금액 : ${n}`);
}

function pay2(n) {
  console.log(`총 금액 (할인적용) : ${n * 0.9}`);
}

let 할인적용여부 = "y";

if (할인적용여부 === "y") {
  buy("컴퓨터", 100, 2, pay2);
} else {
  buy("컴퓨터", 100, 2, pay);
}

// setInerval (콜백함수 ,시간) >>> 입력한 시간마다 콜백함수 실행
setInterval(hello, 1000);
setInterval(function () {
  console.log("bb");
}, 1000);
