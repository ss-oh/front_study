// 실제로는 DB 백엔드 서버 쪽에서 보내주는 데이터

const FRUITS = [
  {name: "apple", memo: "새빨간 사과"},
  {name: "mango", memo: "달달한 망고"},
  {name: "melon", memo: "망고보다 맛있다"},
  {name: "strawberry", memo: "맛있는 딸기"},
  {name: "watermelon", memo: "여름엔 수박"},
];

const productList = document.querySelector(".row");

// const col = document.createElement("div");
// col.className = "col";
// const card = document.createElement("div");
// card.className = "card";
// card.style.width = "18rem";
// const img = document.createElement("img");
// img.className = "card-img-top";
// img.src = `img/${FRUITS[i].name}.jpg`;
// const cardBody = document.createElement("div");
// cardBody.className = "card-body";
// const cardTitle = document.createElement("h5");
// cardTitle.className = "card-title";
// cardTitle.textContent = FRUITS[i].name;
// const cardText = document.createElement("p");
// cardText.className = "card-text";
// cardText.textContent = FRUITS[i].nemo;
// const btnPrimary = document.createElement("button");

// const caardName = document.querySelectorAll(".card-body h5");
// const cardMemo = document.querySelectorAll(".card-body p");
// const cardImg = document.querySelectorAll("img");

// let divtag = document.createElement("div");
// divtag.className = "col";

// let cardform = `
//   <div class="col">
//     <div class="card" style="width: 18rem">
//       <img src="이미지" class="card-img-top" />
//       <div class="card-body">
//         <h5 class="card-title">제목</h5>
//         <p class="card-text">내용</p>
//         <button class="btn btn-primary">담기</button>
//       </div>
//     </div>
//   </div>
// `;

// document.querySelector(".row").innerHTML = cardform;

// beforebegin : 해당 요소 앞에 html을 넣어줌
// afterbegin : 해당 요소 첫번째 자식으로 추가
// beforeend : 해당 요소 마지막 자식으로 추가
// afterend : 해당 요소 뒤에 넣어줌

// document.querySelector(".row").insertAdjacentHTML("beforeend", cardform);

for (let i = 0; i < FRUITS.length; i++) {
  productList.innerHTML += `
    <div class="col">
      <div class="card" style="width: 18rem">
        <img src="img/${FRUITS[i].name}.jpg" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${FRUITS[i].name}</h5>
          <p class="card-text">${FRUITS[i].memo}</p>
          <button class="btn btn-primary cart">담기</button>
        </div>
      </div>
    </div>
  `;
  // document.querySelectorAll(".card-body h5")[i].innerHTML = FRUITS[i].name;
  // document.querySelectorAll(".card-body p")[i].innerHTML = FRUITS[i].memo;
  // document
  //   .querySelectorAll("img")
  //   [i].setAttribute("src", `img/${FRUITS[i].name}.jpg`);
  // document.querySelector(".row").insertAdjacentHTML("beforeend,card");
}
const cart = document.querySelectorAll(".cart");
// cart.addEventListener("click", () => {
//   alert("a");
// });
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML;

    // localStorage.setItem("cart", JSON.stringify([name])); 이거 안됨->한개만담김
    let temp = localStorage.getItem("cart");
    if (temp != null) {
      // 로컬스토리지에 정보가 있으면 먼저 그 정보들을 꺼내온다.
      // 문자열 형태이므로 원본인 배열로 되돌려줌
      temp = JSON.parse(temp);

      // 새로 장바구니에 담을 name을 추가
      temp.push(name);
      // 추가된 정보를 다시 로컬스토리지에 넣음
      localStorage.setItem("cart", JSON.stringify(temp));
    } else {
      localStorage.setItem("cart", JSON.stringify([name]));
    }
  });
}
// 로컬스토리지에 담기버튼을 누르면 새로운게 추가되는게 아니라 계속 기존것이 사라지면서 새것만 추가됨
// -> 담기 버튼을 누르면 새로운게 추가되서 로컬스토리지에 저장
// 그냥 setItem으로는 불가능함 - 동일한 key라서
// 1.이미 로컬스토리지에 cart가 존재하면 해당 값을 먼저 꺼내왔으면 좋겠다
// 2.꺼내온 데이터에 새로 담을 정보를 추가하고
// 3.추가된 데이터를 다시 로컬스토리지에 넣는다

// FRUITS.forEach((data) => {
//   console.log(data);
// });

// 로컬스토리지 - 지우지 않는 이상 계속 있음
// 세션스토리지 - 브라우저를 종료하면 사라짐

// // 로컬스토리지에 저장 or 수정 (동일한 키를 넣으면 기존 데이터를 지움)
// localStorage.setItem("키", "벨류");
// // 로컬스토리지에서 해당 키에 대한 값을 리턴해줌
// localStorage.getItem("키");
// // 로컬스토리지에서 해당 키를 삭제
// localStorage.removeItem("키");

// let arr = [1, 2, 3, 4, 5];
// let obj = {
//   name: "kim",
//   age: 20,
// };

// localStorage.setItem("arr", arr);
// localStorage.setItem("obj", obj);

// 로컬스토리지에는 배열, 오브젝트를 넣어도 문자열 형태로 처리됨
// console.log(localStorage.getItem("arr", arr));
// console.log(localStorage.getItem("obj", obj));

// JSON형식으로 변환 [1,2,3,4] -> "[1,2,3,4]"
// let arr_json = JSON.stringify(arr);

// console.log(arr_json, typeof arr_json);

// 배열은 아니지만 배열 구조 (대괄호)가 유지된채로 문자열이 됨
// localStorage.setItem("arr", arr_json);

// arr = localStorage.getItem("arr");
// // 로컬스토리지에서 꺼내와도 아직은 문자열 (구조가 살아있는 상태)
// console.log(arr, typeof arr);

// // 문자열인 형태를 다시 배열로 되돌려줌 (구조가 살아있어서 배열로 돌려줄 수 있다)
// arr = JSON.parse(arr);
// console.log(arr, typeof arr);
