window.addEventListener('load', ()=> {
  let long;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{ 
      long = position.coords.longitude
      lat = position.coords.latitude  

      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const api = `6676c4c24ec54d80090a4fa61664238a`
      
      fetch(api)
      .then(data => {
        return data.json()
      })
      .then(data => {
        console.log(data)
      })


      console.log(position)})
  }else{
    h1.textContent = "Cannot find the location"
  }
})