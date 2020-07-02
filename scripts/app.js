const cityForm = document.querySelector(".change-location");


  const updateCity = async (city) => {
    console.log(city); 

  };   

cityForm.addEventListener("submit", e => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city);


 }); 