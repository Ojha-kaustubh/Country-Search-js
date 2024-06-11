document.addEventListener( 'DOMContentLoaded' ,  () => {

  
  const countryContainer = document.querySelector('.countries-container')
  // console.log(countryCard);
  
  // console.log(toggle)
  const togglebtn = document.querySelector('.toggle-mode');
  
  togglebtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  fetch("https://restcountries.com/v3.1/all")
  .then ( (response) => response.json())
  .then ((data) => data.forEach((country) => {
    console.log(country)
        // const countryCard = document.querySelector('.country-card');
  const countryCard = document.createElement('div')
  // const countryImage = document.querySelector('img');
  countryCard.classList.add('country-card')

  const card = `
  <img src="${country.flags.svg}" alt="flag" />
      <div class="card-text">
      <h3 class="card-tittle">${country.name.official}</h3>
      <p><b>Area Of Country :</b>${country.area}Km</p>
      <p><b>Region : </b>${country.region}</p>
      <p><b>Border Of Country : </b>${country.borders}</p>
      <p><b>Capital Of Country : </b>${country.capital}</p>
    </div> `
    
    countryCard.innerHTML = card;
    countryContainer.append(countryCard);
  }))
});
  