// DOM PLANETER & SOLEN
const sun = document.getElementById("sun");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptunus = document.getElementById("neptunus");

// DOM - PLANETEN I INFODELEN
partOne = document.getElementById("part-one");
partTwo = document.getElementById("part-two");
partThree = document.getElementById("part-three");

// DOM INFORMATION
const planetTitle = document.getElementById("planet-desc-title");
const planetTitleLatin = document.getElementById("planet-desc-latin");
const planetDesc = document.getElementById("planet-desc-text");
const circumference = document.getElementById("circumference");
const distanceFromSun = document.getElementById("distance-from-sun");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");
const moons = document.getElementById("moons");
const closeButton = document.getElementById("close-button");
const planets = document.getElementById("planets");
const infoPage = document.getElementById("info-page");

// funktion för att hämta API-nyckel
async function getBodiesData() {
  let response = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
    {
      method: "POST",
    }
  );
  let keyData = await response.json();
  let apiKey = keyData.key;

  // funktion för att hämta data med API-nyckeln från ovan funktion
  let resp = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
    {
      method: "GET",
      headers: {"x-zocom": apiKey},
    }
  );
  data = await resp.json();
  return data.bodies;
}

getBodiesData();

// funktion för att skriva ut informationen
function printInfo(data, num) {
  moons.innerHTML = "";
  planetTitle.innerText = data[num].name.toUpperCase();
  planetTitleLatin.innerText = data[num].latinName.toUpperCase();
  planetDesc.innerText = data[num].desc;
  circumference.innerText = `${data[num].circumference.toLocaleString()} km`;
  distanceFromSun.innerText = `${data[num].distance.toLocaleString()} km`;
  maxTemp.innerText = `${data[num].temp.day}°C`;
  minTemp.innerText = `${data[num].temp.night}°C`;

  data[num].moons.forEach((moon) => {
    const moonListItem = document.createElement("li");
    moonListItem.innerText = moon;
    moons.append(moonListItem);
  });
}

sun.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(255, 208, 41, 1)";
  partTwo.style.backgroundColor = "rgba(255, 208, 41, 0.1)";
  partThree.style.backgroundColor = "rgba(255, 208, 41, 0.06)";
  printInfo(data.bodies, 0);
});
mercury.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(136, 136, 136, 1)";
  partTwo.style.backgroundColor = "rgba(136, 136, 136, 0.1)";
  partThree.style.backgroundColor = "rgba(136, 136, 136, 0.06)";
  printInfo(data.bodies, 1);
});
venus.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(231, 205, 205, 1)";
  partTwo.style.backgroundColor = "rgba(231, 205, 205, 0.1)";
  partThree.style.backgroundColor = "rgba(231, 205, 205, 0.06)";
  printInfo(data.bodies, 2);
});
earth.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(66, 142, 212, 1)";
  partTwo.style.backgroundColor = "rgba(66, 142, 212, 0.1)";
  partThree.style.backgroundColor = "rgba(66, 142, 212, 0.06)";
  printInfo(data.bodies, 3);
});
mars.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(239, 95, 95, 1)";
  partTwo.style.backgroundColor = "rgba(239, 95, 95, 0.1)";
  partThree.style.backgroundColor = "rgba(239, 95, 95, 0.06)";
  printInfo(data.bodies, 4);
});
jupiter.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(226, 148, 104, 1)";
  partTwo.style.backgroundColor = "rgba(226, 148, 104, 0.1)";
  partThree.style.backgroundColor = "rgba(226, 148, 104, 0.06)";
  printInfo(data.bodies, 5);
});
saturn.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(199, 170, 114, 1)";
  partTwo.style.backgroundColor = "rgba(199, 170, 114, 0.1)";
  partThree.style.backgroundColor = "rgba(199, 170, 114, 0.06)";
  printInfo(data.bodies, 6);
});
uranus.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(201, 212, 241, 1)";
  partTwo.style.backgroundColor = "rgba(201, 212, 241, 0.1)";
  partThree.style.backgroundColor = "rgba(201, 212, 241, 0.06)";
  printInfo(data.bodies, 7);
});
neptunus.addEventListener("click", () => {
  planets.classList.add("hide");
  infoPage.classList.remove("hide");
  partOne.style.backgroundColor = "rgba(122, 145, 167, 1)";
  partTwo.style.backgroundColor = "rgba(122, 145, 167, 0.1)";
  partThree.style.backgroundColor = "rgba(122, 145, 167, 0.06)";
  printInfo(data.bodies, 8);
});

closeButton.addEventListener("click", () => {
  planets.classList.remove("hide");
  infoPage.classList.add("hide");
});
