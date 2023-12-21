// DARK MODE/ LIGHT MODE
// VARIABLES
let darkOrLight = document.querySelector(".sun");
let faMoon = document.querySelector(".fa-moon-o");
let faSun = document.querySelector(".fa-sun-o");
let pays = document.querySelector(".pays");
let span = document.querySelector("span");
console.log(pays);

let body = document.querySelector("body");
function modeDarkLight() {
  faSun.classList.toggle("fa-sun-o");
  faSun.classList.toggle("fa-moon-o");
  body.classList.toggle("dark");
  span.classList.toggle("test");
  darkOrLight.classList.toggle("test");
}

darkOrLight.addEventListener("click", modeDarkLight);

// // GESTION DE L'API
// // SEARCH BY COUNTRY NAME
// // Variables
let countryName = document.querySelector(".title");
let population = document.querySelector(".card-text");
let region = document.querySelector(".region");
let capital = document.querySelector(".capital");
let picture = document.querySelector(".img");
let cards = document.querySelector(".cards");

console.log(pays);
// pays.style.height = "300px";

// // // API ALL COUNTRY
const apiAll = "https://restcountries.com/v3.1/all";
async function allCountry() {
  const response = await fetch(apiAll);
  let data = await response.json();
  console.log(data);
  for (i = 0; i < data.length; i++) {
    pays.innerHTML += `<div class="shadow rounded bg-white" style="width: 18rem;>
    <div class="card-body text-dark">
    <img src="${data[i].flags.png}" class="img-fluid" style="heigth: 300px;>
        <h4 class="name">${data[i].name.common}</h4>
        <h6 class="population">
         Population: ${data[i].population}</h6>
        <h6 class="region">Region: ${data[i].continents}</h6>
        <h6 class="capital">Capital: ${data[i].capital}</h6>
    </div>
</div>`;
  }
}
// cards.innerHTML += pays;
allCountry();
// // FILTRER LES PAYS PAR CONTINENT

// const apiByContinent = "https://restcountries.com/v3.1/region/";
// let selectInput = document.getElementById("select");
// async function getCountryByContinent(country) {
//   const response = await fetch(apiByContinent + country);
//   let data = await response.json();

//   return data;
// }

// selectInput.addEventListener("change", async function () {
//   const data = await getCountryByContinent(selectInput.value);
//   pays.innerHTML = "";
//   console.log(data);
//   for (i = 0; i < data.length; i++) {
//     pays.innerHTML += ` <div class="card shadow" style="width: 18rem; heigth:300px">
//       <img src="${data[i].flags.png}">
//       <div class="card-body">
//           <h4 class="name">${data[i].name.common}</h4>
//           <h6 class="population">
//            Population: ${data[i].population}</h6
//           <h6 class="region">Region: ${data[i].continents}</h6>
//           <h6 class="capital">Capital: ${data[i].capital}</h6>
//       </div>
//   </div>`;
//   }
// });

// // ASIE

// // const apiAsie = "https://restcountries.com/v3.1/region/asia";

// // OCEANIE

// // const apiOceanie = "https://restcountries.com/v3.1/region/oceania";

// // AMERICA
// // const apiAmerica = "https://restcountries.com/v3.1/region/america";
