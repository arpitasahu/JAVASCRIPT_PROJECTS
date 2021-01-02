let loc = document.getElementById('location');
let tempicon = document.getElementById('temp-icon');
let tempvalue = document.getElementById('temp-value');
let climate = document.getElementById('climate');
let iconfile;
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');

//functionality to button and value for weather.
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(searchInput.value);
  searchInput.value = '';

});

const getWeather = async (city) => {

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c53bf930c70c9a8d8a9498f0d3ca4e4`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    const { name } = weatherData;
    const { feels_like } = weatherData.main;
    const { id, main } = weatherData.weather[0];
    loc.textContent = name;
    climate.textContent = main;
    tempvalue.textContent = Math.round(feels_like - 273);
    if (id < 300 && id > 200) {
      tempicon.src = "./icons/storm.svg"
    }
    else if (id < 400 && id > 300) {
      tempicon.src = "./icons/cloud-black.svg"
    }
    else if (id < 600 && id > 500) {
      tempicon.src = "./icons/raining.svg"
    }
    else if (id < 700 && id > 600) {
      tempicon.src = "./icons/pine-tree.svg"
    }
    else if (id < 800 && id > 700) {
      tempicon.src = "./icons/cloud.svg"
    }
    else if (id == 800) {
      tempicon.src = "./icons/clouds-and-sun.svg"
    }

  }
  catch (error) {
    alert('city not found');
  }

};

//get location api
window.addEventListener('load', () => {

  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";

      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6c53bf930c70c9a8d8a9498f0d3ca4e4`


      fetch(api).then((response) => {
        return response.json();

      })

        .then(data => {
          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];


          loc.textContent = name;
          climate.textContent = main;
          tempvalue.textContent = Math.round(feels_like - 273);
          console.log(data);

          if (id < 300 && id > 200) {
            tempicon.src = "./icons/storm.svg"
          }
          else if (id < 400 && id > 300) {
            tempicon.src = "./icons/cloud-solid.svg"
          }
          else if (id < 600 && id > 500) {
            tempicon.src = "./icons/raining.svg"
          }
          else if (id < 700 && id > 600) {
            tempicon.src = "./icons/pine-tree.svg"
          }
          else if (id < 800 && id > 700) {
            tempicon.src = "./icons/cloud.svg"
          }
          else if (id == 800) {
            tempicon.src = "./icons/clouds-and-sun.svg"
          }

        })


    }
    )
  }


});
