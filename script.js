//DOM för  planeter och solen
const sun = document.getElementById("sun");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptunus = document.getElementById("neptunus");
const secondRing = document.getElementById("second-ring");

//DOM för "planeten" i infodelen
const infoPlanet = document.getElementById("info-planet");

//DOM för informationen om planeten och solen
const planetTitle = document.getElementById("planet-desc-title");
const planetTitleLatin = document.getElementById("planet-desc-latin");
const planetDesc = document.getElementById("planet-desc-text");
const circumference = document.getElementById("circumference");
const distanceFromSun = document.getElementById("distance-from-sun");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");
const moons = document.getElementById("moons");

//DOM för att gömma de olika elementen
const infoPage = document.getElementById("info-page");
const wrapper = document.getElementById("wrapper");
const closeButton = document.getElementById("close-button");

//DOM för stjärnorna
let canvas = document.getElementById("stars");

// **************************************************************//

//funktion för att hämta API-nyckel och sedan data från ett API
async function getBodiesData() {
  let response = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
    {
      method: "POST",
    }
  );
  let keyData = await response.json();
  let apiKey = keyData.key;

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
//anropar datan så det snabbt skall gå att skriva ut datan från den
getBodiesData();

//funktion för att skriva ut information om vald planet eller solen
function printInfo(data, num) {
  moons.innerHTML = ""; //nollställer listan för månarna
  planetTitle.innerText = data[num].name.toUpperCase();
  planetTitleLatin.innerText = data[num].latinName.toUpperCase();
  planetDesc.innerText = data[num].desc;
  circumference.innerText = `${data[num].circumference.toLocaleString()} km`;
  distanceFromSun.innerText = `${data[num].distance.toLocaleString()} km`;
  maxTemp.innerText = `${data[num].temp.day}°C`;
  minTemp.innerText = `${data[num].temp.night}°C`;

  //om det ej finns någon måne skall detta skrivas ut
  if (data[num].moons.length === 0) {
    moons.innerText = `Har inga månar`;
  } else {
    //skapar en ny lista om det skulle finnas dubletter av några månar.
    let newMoonList = [...new Set(data[num].moons)];
    //använder den nya listan för att skapa ett list item för varje måne och lägga det i min UL.
    newMoonList.forEach((moon) => {
      const moonListItem = document.createElement("li");
      moonListItem.innerText = moon;
      moons.append(moonListItem);
    });
  }
}
//funktion för vad som skall hända på varje eventL nedan
function planetClick(color, index) {
  stars();
  secondRing.classList.add("hide");
  wrapper.classList.add("hide");
  infoPage.classList.remove("hide");
  infoPlanet.style.backgroundColor = `rgba(${color}, 1)`;
  infoPlanet.style.boxShadow = `0 0 0 50px rgba(${color},0.1), 0 0 0 100px rgba(${color},0.06)`;
  printInfo(data.bodies, index);
}
//funktion för att rita upp stjärnor
function stars() {
  let ctx = canvas.getContext("2d"); //skapar en 2D kontext för canvasen. används för att sen kunna rita

  ctx.clearRect(0, 0, canvas.width, canvas.height); //nollställer stjärnorna så det skapas nya varje gång funktionen körs
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; //fyller det som ritas med vitt och sätter en opacitet

  for (let i = 0; i < 200; i++) {
    //loop som kommer köras 200ggr och skapa 1 stjärna för varje varv.
    let x = Math.random() * canvas.width; //slumpmässigt värde på bredden
    let y = Math.random() * canvas.height; //slumpmässigt värde på höjden
    let radius = Math.random() * 2; //slumpmässigt värde för stjärnans radie. 0-2px
    ctx.beginPath(); //används för att tala om att vi skall rita en form i canvasen
    ctx.arc(x, y, radius, 0, 2 * Math.PI); //cirkeln ritas. Math.PI används för att det skall bli en hel cirkel
    ctx.shadowColor = "rgba(255, 255, 255, 1)"; //lägger på en skugga på varje cirkel
    ctx.shadowBlur = 2; //blurrar skuggan
    ctx.fill(); //lägger till stjärnorna på sidan
    ctx.stroke(); //används för att skugga och blurr skall synas tydligare
  }
}
//funktion för att stänga ner infosidan
function closePage() {
  wrapper.classList.remove("hide");
  infoPage.classList.add("hide");
}

// eventlisteners för solen och planeterna så funktionerna körs när man klickar på dom.
sun.addEventListener("click", () => {
  planetClick(`255, 208, 41`, 0); //färgkod och index från datan vi fetchade i början
});
mercury.addEventListener("click", () => {
  planetClick(`136, 136, 136`, 1);
});
venus.addEventListener("click", () => {
  planetClick(`231, 205, 205`, 2);
});
earth.addEventListener("click", () => {
  planetClick(`66, 142, 212`, 3);
});
mars.addEventListener("click", () => {
  planetClick(`239, 95, 95`, 4);
});
jupiter.addEventListener("click", () => {
  planetClick(`226, 148, 104`, 5);
});
saturn.addEventListener("click", () => {
  planetClick(`199, 170, 114`, 6);
  secondRing.classList.remove("hide"); //tar bort klassen hide så ringen syns
});
uranus.addEventListener("click", () => {
  planetClick(`201, 212, 241`, 7);
});
neptunus.addEventListener("click", () => {
  planetClick(`122, 145, 167`, 8);
});

//eventlistener på tillbaka knappen så vi kan toggla mellan sidorna
closeButton.addEventListener("click", () => {
  closePage();
});
