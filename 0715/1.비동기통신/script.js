// 비동기 통신

// 요청 시 사용되는 메서드
// get - 정보를 받아옴 (마이페이지)
// post - 정보를 생성 (회원가입,로그인)
// put - 정보를 수정 (회원정보 수정)
// delete - 정보를 삭제 (회원탈퇴)

// 옛날꺼
// 통신에서 주고받는 데이터는 전부 문자임
// JSON형태로 거의 대부분 주고 받음
// JSON: js에 object처럼 키와 값으로 되어있음 배열 형태도 가능함
// 하지만 우리가js에서 사용하는 배열, 오브젝트를 바로 전송하는 건 불가능
// 그래서 해당 데이터를 JSON으로 변환 후 전송
// 요청 후 응답이 온 데이터도 JSON임
// 해당 데이터를 js에서 사용하려면 배열,오브젝트로 변환
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");

const data = {
  userId: 100,
  title: "비동기통신 연습",
  body: "이것저것보내는중",
};

xhr.send(JSON.stringify(data));
xhr.onload = () => {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드
  console.log(JSON.parse(xhr.response)); // 응답 데이터
};

// 요즘 것
// fetch("요청주소");
// .then((변수)=>성공 시 처리할 코드)
// .catch((e)=> 요청 실패시 처리할 코드)
const getBtn = document.querySelector(".get");
const postBtn = document.querySelector(".post");

// ex) 커뮤니티 사이트에 작성된 특정 게시글을 보려고 할 때
// get요청 버튼을 사용자가 누름
// 서버로 나 xxx게시글좀 보고싶어요~~라고 요청을 날림
// 서버가 요청을 받아서 보고싶은 게시글을 찾음
// => DB에 접속해서 해당 게시글을 꺼내옴
// 서버가 해당 게시글 데이터를 응답객체에 담아서
// 사용자한테 다시 보내줌(응답처리)

// 사용자측에서 응답데이터를 받아서 html화면에 예쁘게 뿌려짐

const title = document.querySelector(".title");
const id = document.querySelector(".id");
const userid = document.querySelector(".userid");
const body = document.querySelector(".body");

getBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userid.innerHTML = data.userId;
      body.innerHTML = data.body;
    })
    .catch((e) => {
      console.log(e);
    });
});

const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    userId: post_userId.value,
    title: post_title.value,
    body: post_body.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("게시글 등록 완료");
    })
    .catch((e) => {
      console.log(e);
      alert("게시글 등록 실패");
    });
});

const async_test = document.querySelector(".async");

async_test.addEventListener("click", async () => {
  let a = 1;

  a = await fetch("https://jsonplaceholder.typicode.com/posts");
  a = await a.json();
  console.log(a.json());
});

function add(i) {
  for (i = 0; i < 10000; i++) {}
  return i;
}
