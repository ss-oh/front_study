const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.querySelector(".btn").style.backgroundColor = "black";
    document.querySelector(".btn").style.color = "white";
    document.querySelector(".btn").value = "라이트모드";
    console.log(document.querySelector(".btn").style);
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector(".btn").style.backgroundColor = "white";
    document.querySelector(".btn").style.color = "black";
    document.querySelector(".btn").value = "다크모드";
    console.log(document.querySelector(".btn").style);
  }
});
