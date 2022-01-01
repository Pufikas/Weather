window.addEventListener('load', ()=> {
  let long;
  let lat;

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
        console.log(data)
      })


      console.log(position)})
  }else{
    h1.textContent = "Cannot find the location"
  }
})