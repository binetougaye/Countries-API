// Variables
// dark-mode/light-mode
let sun = document.querySelector(".sun");
let body = document.querySelector("body");
// let moonMode = '';
function sunnyMode() {
  sun.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
}
sunnyMode();
sun.addEventListener("click", () => {
  sun.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
});
// GESTION DE L'API
// SEARCH BY COUNTRY NAME
// Variables
let countryName = document.querySelector(".title");
let population = document.querySelector(".card-text");
let region = document.querySelector(".region");
let capital = document.querySelector(".capital");
let picture = document.querySelector(".img");
const apiUrl = "https://restcountries.com/v3.1/name/spain";
let inputSearch = document.getElementById("searchInput");
// async function getData(country) {
//   const response = await fetch(apiUrl);
//   let data = await response.json();
//   // COUNTRY FLAG
//   let flag = data[0].flags.png;
//   picture.src = flag;
//   console.log(flag);
//   // POPULATION
//   let countryDataPop = data[0].population;
//   population.innerHTML = `Population: ${countryDataPop}`;
//   // REGION
//   let countryRegion = data[0].region;
//   region.innerHTML = `Region: ${countryRegion}`;
//   // CAPITAL
//   let countryCapital = data[0].capital[0];
//   capital.innerHTML = `Capital: ${countryCapital}`;
// }
// getData();
// inputSearch.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     getData(inputSearch.value);
//     countryName.innerHTML = inputSearch.value;
//   }
// });
// API ALL COUNTRY
const apiAll = "https://restcountries.com/v3.1/all";
let cards = document.querySelector(".cards");
let pays = document.querySelector(".pays");
// pays.style.height = "300px";
async function allCountry() {
  const response = await fetch(apiAll);
  let data = await response.json();
  console.log(data[0]);
  for (i = 0; i < data.length; i++) {
    // console.log(data[i]);
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
