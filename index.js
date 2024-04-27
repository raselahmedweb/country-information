const countries = document.querySelector(".countries");

async function getCountryInfo() {
  const country = await fetch("https://raselwebdevv.github.io/country_info/country.json");
const lastInfo = await country.json();
  
    lastInfo.forEach((countrie, index) => {
      let counter = index + 1;
      if (counter < 10) {
        counter = "00" + counter;
      } else if (counter < 100 && counter > 9) {
        counter = "0" + counter;
      }
      countries.innerHTML += `
                <div class="country">
                     <div class="counter"><span>${counter}</span></div>
                    <div class="name"><span>Name:</span><span> ${lastInfo[index].name}</span></div>
                    <div class="region"><span>Region:</span><span> ${lastInfo[index].region}</span></div>
                    <div class="iso"><span>Iso:</span><span> ${lastInfo[index].iso["alpha-3"]}</span></div>
                    <div class="phone"><span>Dial Code:</span><span> ${lastInfo[index].phone}</span></div>
                    <div class="flag"><span>Image Flag: </span><span><img src=" ${lastInfo[index].image}" alt=""></span></div>
                </div>`;
    });
};

getCountryInfo();
