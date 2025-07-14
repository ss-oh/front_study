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
  console.log(scroll);
  if (isDisabled && boxHeight + scroll > boxY - 5) {
    document.querySelector("#chk").disabled = false;
    isDisabled = false;
  }
});

btn.addEventListener("click", () => {
  if (!checkbox.checked) {
    alert("ss");
  }
});
