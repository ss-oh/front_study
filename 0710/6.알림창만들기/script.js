function toggleBtn() {
  const btn = document.getElementById("ab");

  if (btn.style.display === "block") {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
}

function showHide(state) {
  // JS 문법
  document.getElementById("ab").style.display = state;
  // jQuery 문법
  $("#ab").css("display", state);
}

const button = document.getElementById("aa");

function changetxt(txt) {
  // JS 문법
  document.querySelector(".alert").innerHTML = txt;

  // jQuery문법
  $(".alert").html(txt);
}
