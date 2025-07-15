const box = document.querySelector(".box");
let boxY = box.scrollHeight;
console.log(boxY);
let boxHeight = box.clientHeight;
console.log(boxHeight);

let btn = document.querySelector("button");
let checkbox = document.querySelector("#chk");
let isDisabled = true;

box.addEventListener("scroll", () => {
  let scroll = box.scrollTop;
  if (isDisabled && boxHeight + scroll > boxY - 5) {
    document.querySelector("#chk").disabled = false;
    isDisabled = false;
  }
});

btn.addEventListener("click", () => {
  if (!checkbox.checked) {
    alert("약관동의를 체크하세요.");
  } else if (checkbox.checked) {
    alert("다음으로이동");
  }
});

console.log(window.innerHeight);
console.log(document.body.clientHeight);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const status = (window.scrollY / (bodyHeight - innerHeight)) * 100;
  document.querySelector(".status-bar").style.width = `${status}%`;
});

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;

const bar = document.querySelector(".status-bar");
