window.addEventListener('load', ()=> {
  let long
  let lat
  let temperatureDescription = document.querySelector(".temperature-description")
  let temperatureDegree = document.querySelector(".temperature-degree")
  let locationTimezone = document.querySelector(".location-timezone")


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{ 
      long = position.coords.longitude
      lat = position.coords.latitude  

      const APIkey = require(["../key"])
      console.log(APIkey)
      const proxy = "https://cors-anywhere.herokuapp.com/"
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=metric
      `
      
      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const { temp } = data.main
        const { description } = data.weather
        console.log(data)
        // set dom ele from api
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = description
        textContent = data.name;
      })
      console.log()

      console.log(position)})
  } else {
    h1.textContent = "Cannot find the location"
  }
})