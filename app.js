// GESTION DE L'API
// SEARCH BY COUNTRY NAME
// Variables
let countryName = document.querySelector(".title");
let population = document.querySelector(".card-text");
let region = document.querySelector(".region");
let capital = document.querySelector(".capital");
let picture = document.querySelector(".img");

// // API ALL COUNTRY
const apiAll = "https://restcountries.com/v3.1/all";
let cards = document.querySelector(".cards");
let pays = document.querySelector(".pays");
console.log(pays);
pays.style.height = "300px";
async function allCountry() {
  const response = await fetch(apiAll);
  let data = await response.json();
  console.log(data);
  for (i = 0; i < data.length; i++) {
    pays = ` <div class="card shadow" style="width: 18rem; heigth:300px">
    <img src="${data[i].flags.png}"  >
    <div class="card-body">
        <h4 class="name">${data[i].name.common}</h4>
        <h6 class="population">
         Population: ${data[i].population}</h6>
        <h6 class="region">Region: ${data[i].continents}</h6>
        <h6 class="capital">Capital: ${data[i].capital}</h6>
    </div>
</div>`;

    cards.innerHTML += pays;
  }
}
allCountry();
// FILTRER LES PAYS PAR CONTINENT
// EUROPE
const apiByContinent = "https://restcountries.com/v3.1/region/europe";
let selectInput = document.getElementById("select");
selectInput.addEventListener("change", function () {
  console.log(selectInput.value);
});
let europe = document.getElementById("eur");
let carte = document.querySelector(".carte");
async function getCountryByContinent() {
  const response = await fetch(apiByContinent);
  let data = await response.json();
  console.log(data);
  selectInput.addEventListener("change", function () {
    if (selectInput.value === "Europe") {
      for (i = 0; i < data.length; i++) {
        cards.style.display = "none";
        eur = ` <div class="card shadow" style="width: 18rem; heigth:300px">
        <img src="${data[i].flags.png}"  >
        <div class="card-body">
            <h4 class="name">${data[i].name.common}</h4>
            <h6 class="population">
             Population: ${data[i].population}</h6>
            <h6 class="region">Region: ${data[i].continents}</h6>
            <h6 class="capital">Capital: ${data[i].capital}</h6>
        </div>
    </div>`;
        console.log(cards);
        carte.innerHTML += eur;
      }
    }
  });
}
getCountryByContinent();
// ASIE
let asie = document.getElementById("asie");
let Carte = document.querySelector(".Carte");
const apiAsie = "https://restcountries.com/v3.1/region/asia";
async function getAsiaCountries() {
  const response = await fetch(apiAsie);
  let data = await response.json();
  console.log(data);

  selectInput.addEventListener("change", function () {
    if (selectInput.value === "Asia") {
      for (i = 0; i < data.length; i++) {
        cards.style.display = "none";
        asie = ` <div class="card shadow" style="width: 18rem; heigth:300px">
        <img src="${data[i].flags.png}"  >
        <div class="card-body">
            <h4 class="name">${data[i].name.common}</h4>
            <h6 class="population">
             Population: ${data[i].population}</h6>
            <h6 class="region">Region: ${data[i].continents}</h6>
            <h6 class="capital">Capital: ${data[i].capital}</h6>
        </div>
    </div>`;

        Carte.innerHTML += asie;
      }
    }
  });
}
getAsiaCountries();
// OCEANIE

const apiOceanie = "https://restcountries.com/v3.1/region/oceania";
let oceanieCard = document.querySelector(".oceanieCard");
let oceanie = document.getElementById("oceanie");
async function getOceaniaCountries() {
  const response = await fetch(apiOceanie);
  let data = await response.json();
  console.log(data);

  selectInput.addEventListener("change", function () {
    if (selectInput.value === "Oceania") {
      for (i = 0; i < data.length; i++) {
        // cards.style.display = "none";
        oceanie = ` <div class="card shadow" style="width: 18rem; heigth:300px">
        <img src="${data[i].flags.png}">
        <div class="card-body">
            <h4 class="name">${data[i].name.common}</h4>
            <h6 class="population">
             Population: ${data[i].population}</h6>
            <h6 class="region">Region: ${data[i].continents}</h6>
            <h6 class="capital">Capital: ${data[i].capital}</h6>
        </div>
    </div>`;

        oceanieCard.innerHTML += oceanie;
      }
    }
  });
}
getOceaniaCountries();
// AMERICA
const apiAmerica = "https://restcountries.com/v3.1/region/america";
let americaCard = document.querySelector(".americaCard");
let america = document.getElementById("america");
async function getAmericaCountries() {
  const response = await fetch(apiAmerica);
  let data = await response.json();
  console.log(data);

  selectInput.addEventListener("change", function () {
    if (selectInput.value === "America") {
      for (i = 0; i < data.length; i++) {
        // cards.style.display = "none";
        america = ` <div class="card shadow" style="width: 18rem; heigth:300px">
        <img src="${data[i].flags.png}">
        <div class="card-body">
            <h4 class="name">${data[i].name.common}</h4>
            <h6 class="population">
             Population: ${data[i].population}</h6>
            <h6 class="region">Region: ${data[i].continents}</h6>
            <h6 class="capital">Capital: ${data[i].capital}</h6>
        </div>
    </div>`;

        americaCard.innerHTML += america;
      }
    }
  });
}
getAmericaCountries();
