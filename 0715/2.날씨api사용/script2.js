const countryCoordinates = {
  한국: {
    latitude: 37.5665,
    longitude: 126.978,
  },
  일본: {
    latitude: 35.6895,
    longitude: 139.6917,
  },
  미국: {
    latitude: 38.9072,
    longitude: -77.0369,
  },
  영국: {
    latitude: 51.5074,
    longitude: -0.1278,
  },
  프랑스: {
    latitude: 48.8566,
    longitude: 2.3522,
  },
  알제리: {
    latitude: 36.7538,
    longitude: 3.0588,
  },
};
const selectcountry = document.querySelector("select");
const main = document.querySelector(".main");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const weatherImg = document.querySelector(".weatherImg");
const APIKEY = "f704ce7f75d8eea851c489f4609abecc";

window.onload = function () {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      main.innerHTML = data.weather[0].main;
      description.innerHTML = data.weather[0].description;
      temp.innerHTML = data.main.temp;
      wind.innerHTML = data.wind.speed;
      const imgURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherImg.setAttribute("src", imgURL);
      if (data.weather[0].main === "Clouds") {
        document.body.style.backgroundColor = "gray";
      } else if (data.weather[0].main === "Rain") {
        document.body.style.backgroundColor = "lightgray";
      } else {
        document.body.style.backgroundColor = "white";
      }
    });
};

selectcountry.addEventListener("change", (e) => {
  let country = e.target.value;
  console.log(e.target.value);
  console.log(country);
  let lat = countryCoordinates[country].latitude;
  console.log(lat);
  let lon = countryCoordinates[country].longitude;
  console.log(lon);

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      main.innerHTML = data.weather[0].main;
      description.innerHTML = data.weather[0].description;
      temp.innerHTML = data.main.temp;
      wind.innerHTML = data.wind.speed;

      const icon = data.weather[0].icon;

      const imgURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherImg.setAttribute("src", imgURL);
      if (data.weather[0].main === "Clouds") {
        document.body.style.backgroundColor = "gray";
      } else if (data.weather[0].main === "Rain") {
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
      } else if (data.weather[0].main === "Clear") {
        document.body.style.backgroundColor = "skyblue";
      }
    });
});
// change event
