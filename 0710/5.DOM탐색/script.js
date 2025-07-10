let box = document.getElementById("box");
box.style.backgroundColor = "red";
console.log(box);

// 선택자를 이용해서 요소를 선택할 수 있음
const box2 = document.querySelector("#box");
box2.style.color = "white";
// 선택자에 해당하는 요소 중 첫번째것 하나만 가져옴 querySelector
// const bg = document.querySelector(".bg");
// bg.style.backgroundColor = "pink";

// 그래서 선택자에 해당하는 모든 요소들을 가져오는 querySelectorAll (같은 선택자가 배열에 담김)

const bg = document.querySelectorAll(".bg");

for (let i = 0; i < bg.length; i++) {
  bg[i].style.backgroundColor = "pink";
}

// for (OOO in OO) - object 반복할때

for (let b of bg) {
  b.style.backgroundColor = "pink";
}

const li = document.querySelectorAll("ul>li");
for (let l of li) {
  l.innerHTML = "zzz";
}
