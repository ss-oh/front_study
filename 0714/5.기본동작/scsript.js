// 태그의 기본동작
// 몇몇 태그들은 기본적으로 이벤트들을 수행함
// ex)a태그는 클릭하면 해당 일크로 이동
// ex)form태그 안 input에서 뭔가 하고 엔터를 누르면 submit이 작동욈

document.querySelector("a").addEventListener("click", () => {
  alert("네이버로 이동)");
});
document.querySelector("p").addEventListener("contextmenu", (e) => {
  el.preventDefault();
  alert("zzz");
});
