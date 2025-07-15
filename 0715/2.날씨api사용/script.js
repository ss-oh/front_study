function connectGeo(position) {
  const lat = "51.212";
  const lon = "151.1242";
  console.log(`위도${lat} 경도 ${lon}`);
  console.log(position);
  const APIKEY = "f704ce7f75d8eea851c489f4609abecc";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
  console.log(URL);

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      main.innerHTML += data.weather[0].main;
      description.innerHTML += data.weather[0].description;
      temp.innerHTML += data.main.temp;
      wind.innerHTML += data.wind.speed;
      weatherImg.setAttribute("src", imgURL);
    });
  const container = document.getElementById("container");

  let hrElement;
  let counter = 100;
  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    if (i == counter - 1) {
      hrElement.className = "thunder";
    } else {
      hrElement.style.left =
        Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
    }
    document.body.appendChild(hrElement);
  }

  console.log(
    "There are " +
      document.querySelectorAll("hr").length +
      " <hr> tags in this project :)"
  );
}
function errorGeo() {
  alert("위치 정보 연결 실패");
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);

const main = document.querySelector(".main");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const weatherImg = document.querySelector(".weatherImg");
const imgURL = `https://openweathermap.org/img/wn/04d@2x.png`;

// ==============================================================
