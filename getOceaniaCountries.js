async function getOceaniaCountries() {
  const response = await fetch(apiOceanie);
  let data = await response.json();
  console.log(data);

  selectInput.addEventListener(
    "change",
    function () {
      //   if (selectInput.value === "Asia") {
      //     for (i = 0; i < data.length; i++) {
      //       cards.style.display = "none";
      //       asie = ` <div class="card shadow" style="width: 18rem; heigth:300px">
      //       <img src="${data[i].flags.png}"  >
      //       <div class="card-body">
      //           <h4 class="name">${data[i].name.common}</h4>
      //           <h6 class="population">
      //            Population: ${data[i].population}</h6>
      //           <h6 class="region">Region: ${data[i].continents}</h6>
      //           <h6 class="capital">Capital: ${data[i].capital}</h6>
      //       </div>
      //   </div>`;
      //       Carte.innerHTML += asie;
      //     }
      //   }
      // });
    },
    getOceaniaCountries()
  );
}
