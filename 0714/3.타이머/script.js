// 정해진 시간이 흐른뒤 해당 코드가 작동되도록 함
// setTimeout(콜백함수,시간(ms));
// 5초뒤에 콜백함수가 실행됨
// console.log("js로드완료");
// setTimeout(() => {
//   console.log("setTimeout작동");
//   document.querySelector(".alert").style.display = "none";
// }, 5000);

// const time = document.querySelector(".time");

// let t = 5;
// time.innerHTML = t;
// // 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// // setInterval(콜백함수,시간(ms));
// const interval = setInterval(() => {
//   t--;
//   time.innerHTML = t;
//   console.log(t);
//   const date = new Date();
//   console.log(date);
// }, 1000);

// let timer;

// clearTimeout(timer);

// document.querySelector(".btn").addEventListener("click", () => {
//   timer = setTimeout(() => {
//     console.log("클릭하면 3초뒤에 나타남");
//   }, 3000);
// });

// 날짜 관련된 함수들
// 현재 날짜와 시간
const date = new Date();
console.log(date);

// 년도 추출
console.log(date.getFullYear());

// 월 추출 - (0부터 11로 출력)
console.log(date.getMonth() + 1);

// 일 추출
console.log(date.getDate());

// 요일 추출 - (0:일요일, 6:토요일)
console.log(date.getDay());

const week = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

const today = new Date().getDay();
// 시간 추출
console.log(date.getHours());
// 분 추출
console.log(date.getMinutes());
// 초 추출
console.log(date.getSeconds());

setInterval(() => {
  const date = new Date();
  document.querySelector(".clock").innerHTML = `
  ${date.getFullYear()}년
  ${date.getMonth() + 1}월 
  ${date.getDate()}일 
  ${date.getHours()}시 
  ${date.getMinutes()}분 
  ${String(date.getSeconds()).padStart(2, 0)}초 
  ${week[today]}`;
}, 1);

let a = "1";
console.log(a.padStart(2, 0));
