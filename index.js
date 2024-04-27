const countries = document.querySelector(".countries");

function getCountryInfo() {
  const country = fetch("https://raselwebdevv.github.io/country_info/country.json");
country
  .then((data) => data.json())
  .then((myData) => {
    myData.forEach((countrie, index) => {
      let counter = index + 1;
      if (counter < 10) {
        counter = "00" + counter;
      } else if (counter < 100 && counter > 9) {
        counter = "0" + counter;
      }
      countries.innerHTML += `
                <div class="country">
                     <div class="counter"><span>${counter}</span></div>
                    <div class="name"><span>Name:</span><span> ${myData[index].name}</span></div>
                    <div class="region"><span>Region:</span><span> ${myData[index].region}</span></div>
                    <div class="iso"><span>Iso:</span><span> ${myData[index].iso["alpha-3"]}</span></div>
                    <div class="phone"><span>Dial Code:</span><span> ${myData[index].phone}</span></div>
                    <div class="flag"><span>Image Flag: </span><span><img src=" ${myData[index].image}" alt=""></span></div>
                </div>`;
    });
  })
  .catch((error) => {
    document.write(error);
  });
}

getCountryInfo();
