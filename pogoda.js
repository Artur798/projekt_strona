const getWeatherForCity = async(city) => {
	//var city = document.getElementById("city").value;
	
    fetch('https://Artur798.github.io/projekt_strona/pogdan.json', {
     method:'GET',
     headers: {
       'Content-Type': 'application/json',
     }})
   .then(response => response.json())
   .then(data => {
   
	 var dane=data[city];
   document.getElementById("temperatura").innerHTML= "temperatura: " + dane.temperatura + "°C";
   document.getElementById("wiatr").innerHTML= "prędkość wiatru: " + dane.wiatr + "km/h";
   
   })
   .catch((err) => {
     console.log(err)
    })
}