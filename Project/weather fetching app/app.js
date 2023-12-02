let input = document.querySelector('input');
let search_btn = document.getElementById("search");
let city_name = document.getElementById("city");
let humidity = document.getElementById("humidity");
let temperature = document.getElementById("temp");
let mintemp = document.getElementById("mintemp");
let maxtemp = document.getElementById("maxtemp");
let wind = document.getElementById("wind");
let city = document.getElementById("cityname")

search_btn.addEventListener('click', function () {
  let searchText = input.value;
  fetchData(searchText);
  input.value = "";
})

function fetchData(searchText) {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`)
    .then(function (response) {
      console.log(response);
      maniputateDom(response.data)
    })
}

function maniputateDom(response) {
  city.textContent = response.name;
  temperature.textCon