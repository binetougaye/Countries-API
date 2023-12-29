// DARK MODE/ LIGHT MODE
// VARIABLES
let darkOrLight = document.querySelector(".sun");
let faMoon = document.querySelector(".fa-moon-o");
let faSun = document.querySelector(".fa-sun-o");
let pays = document.querySelector(".pays");
// console.log(pays);
let span = document.querySelector("span");

let body = document.querySelector("body");
function modeDarkLight() {
  faSun.classList.toggle("fa-sun-o");
  faSun.classList.toggle("fa-moon-o");
  body.classList.toggle("dark");
  span.classList.toggle("test");
  darkOrLight.classList.toggle("test");
  pays.classList.toggle("test");
}

darkOrLight.addEventListener("click", modeDarkLight);

// // GESTION DE L'API
// // Variables
let countryName = document.querySelector(".title");
let population = document.querySelector(".card-text");
let region = document.querySelector(".region");
let capital = document.querySelector(".capital");
let picture = document.querySelector(".img");
let cards = document.querySelector(".cards");
let bodyS = document.querySelector("body");

console.log(pays);
// pays.style.height = "300px";

// // // API ALL COUNTRY
const apiAll = "https://restcountries.com/v3.1/all";
async function allCountry() {
  const response = await fetch(apiAll);
  let data = await response.json();
  console.log(data);
}
// cards.innerHTML += pays;
allCountry();
// // FILTRER LES PAYS PAR CONTINENT
//
async function getCountryByCountry(nom) {
  let data = await fetch("https://restcountries.com/v3.1/name/" + nom);
  console.log(data);
  let response = await data.json();
  console.log(response);
  return response;
}

const apiByContinent = "https://restcountries.com/v3.1/region/";
let selectInput = document.getElementById("select");
async function getCountryByContinent(region) {
  const response = await fetch(apiByContinent + region);
  let data = await response.json();
  return data;
}
let container = document.getElementById("countries");

selectInput.addEventListener("change", async function () {
  const data = await getCountryByContinent(selectInput.value);
  pays.innerHTML = "";
  for (i = 0; i < data.length; i++) {
    pays.innerHTML += `
    <div class="shadow rounded ashs" style="width: 18rem;height: 300px;>
     <div class="card-body p-2">
          <img src="${data[i].flags.png}" style="height: 144px;object-fit: cover;">
         <h4 class="name ms-2 mt-2">${data[i].name.common}</h4>
          <h6 class="population mt-2 ms-2">
            Population: ${data[i].population}</h6>
    <h6 class="region mt-2  ms-2">Region: ${data[i].continents}</h6>
    <h6 class="capital mt-2  ms-2">Capital: ${data[i].capital}</h6>
    </div>
    </div>
    `;
  }
  // DETAIL DES PAYS
  let test = document.querySelectorAll(".ashs");
  let title = document.querySelectorAll(".name");

  for (i = 0; i < test.length; i++) {
    let name = title[i];
    test[i].addEventListener("click", async function (e) {
      const data = await getCountryByCountry(name.innerText);
      console.log(data);
      console.log(name.innerText);
      console.log(name);
      for (i = 0; i < data.length; i++) {
        pays.innerHTML = `
        <div class="row d-flex  justify-content-center align-items-center  ashs" >
        <div class = "col-6">
        <img src="${data[i].flags.png}">
        </div>
        <div class= "col-6 d-flex justify-content-center align-items-center">
     <div class="card-body p-2">
      <h4 class="name ms-2 mt-2">Native Name: ${data[i].name.common}</h4>
      <h6 class="population mt-2 ms-2">Population: ${data[i].population}</h6>      
      <h6 class="region mt-2  ms-2">Region: ${data[i].continents}</h6>
      <h6 class="region mt-2  ms-2">Subregion: ${data[i].subregion}</h6>
      <h6 class="capital mt-2  ms-2">Capital: ${data[i].capital}</h6>
      </div>
      <div>
      <div>
        Border Countries:
        
   
      </div>
      <h6 class=" mt-2  ms-2">:Top Level Domain${data[i].tld[0]}</h6>
      <h6 class="population mt-2 ms-2"> Currencies: ${data[i].population}</h6>
      <h6 class=" mt-2 ms-2"> Langages : ${data[i].region}</h6>
    </div>
   </div>
    </div>
        `;
      }
    });
  }
});
