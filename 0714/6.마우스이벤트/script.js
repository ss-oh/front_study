// click/mosusedown/mouseup/dbclick/mouseover/mouseout

document.querySelector("button").addEventListener("click", (e) => {
  // 0:왼쪽,1가운데,2:오른쪽
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
  console.log(e.clientX, e.clientY);
  console.log(e.pageX, e.pageY);

  if (e.ctrlKey && e.shiftKey && e.altKey) {
    alert("ctrl클릭");
  }
});

// change: 변경되고 포커스가 나가면 작동
// input: 변경이 감지되는 모든 순간 작동
// cut: 잘라내기
// copy: 복사
// paste: 붙여넣기

document.querySelector("input").addEventListener("input", () => {
  alert("change이벤트작동");
});
