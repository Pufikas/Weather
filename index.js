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

      const APIkey = '6676c4c24ec54d80090a4fa61664238a'
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=metric
      `
      
      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const { temp, feels_like } = data.main
        console.log(data)
        // set dom ele from api
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = feels_like
      })
      console.log()

      console.log(position)})
  }else{
    h1.textContent = "Cannot find the location"
  }
})