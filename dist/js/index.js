var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const infoPlanet = document.getElementById("info-planet");
const planetTitle = document.getElementById("planet-desc-title");
const planetTitleLatin = document.getElementById("planet-desc-latin");
const planetDesc = document.getElementById("planet-desc-text");
const circumference = document.getElementById("circumference");
const distanceFromSun = document.getElementById("distance-from-sun");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");
const moons = document.getElementById("moons");
const infoPage = document.getElementById("info-page");
const wrapper = document.getElementById("wrapper");
const closeButton = document.getElementById("close-button");
let canvas = document.getElementById("stars");
let data;
function getBodiesData() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
            method: "POST",
        });
        let keyData = yield response.json();
        let apiKey = keyData.key;
        let resp = yield fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
            method: "GET",
            headers: { "x-zocom": apiKey },
        });
        data = yield resp.json();
        return data.bodies;
    });
}
getBodiesData();
function printInfo(data, num) {
    moons.innerHTML = "";
    planetTitle.innerText = data[num].name.toUpperCase();
    planetTitleLatin.innerText = data[num].latinName.toUpperCase();
    planetDesc.innerText = data[num].desc;
    circumference.innerText = `${data[num].circumference.toLocaleString()} km`;
    distanceFromSun.innerText = `${data[num].distance.toLocaleString()} km`;
    maxTemp.innerText = `${data[num].temp.day}°C`;
    minTemp.innerText = `${data[num].temp.night}°C`;
    if (data[num].moons.length === 0) {
        moons.innerText = `Har inga månar`;
    }
    else {
        let newMoonList = [...new Set(data[num].moons)];
        newMoonList.forEach((moon) => {
            const moonListItem = document.createElement("li");
            moonListItem.innerText = moon;
            moons.append(moonListItem);
        });
    }
}
function planetClick(color, index) {
    stars();
    secondRing.classList.add("hide");
    wrapper.classList.add("hide");
    infoPage.classList.remove("hide");
    infoPlanet.style.backgroundColor = `rgba(${color}, 1)`;
    infoPlanet.style.boxShadow = `0 0 0 50px rgba(${color},0.1), 0 0 0 100px rgba(${color},0.06)`;
    printInfo(data.bodies, index);
}
function stars() {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    for (let i = 0; i < 200; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.shadowColor = "rgba(255, 255, 255, 1)";
        ctx.shadowBlur = 2;
        ctx.fill();
        ctx.stroke();
    }
}
function closePage() {
    wrapper.classList.remove("hide");
    infoPage.classList.add("hide");
}
sun.addEventListener("click", () => {
    planetClick(`255, 208, 41`, 0);
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
    secondRing.classList.remove("hide");
});
uranus.addEventListener("click", () => {
    planetClick(`201, 212, 241`, 7);
});
neptunus.addEventListener("click", () => {
    planetClick(`122, 145, 167`, 8);
});
closeButton.addEventListener("click", () => {
    closePage();
});
