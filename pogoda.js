const getWeatherForCity = async(city) => {
	//var city = document.getElementById("city").value;
	
    fetch('https://Artur798.github.io/projekt123/pogdan.json', {
     method:'GET',
     headers: {
       'Content-Type': 'application/json',
     }})
   .then(response => response.json())
   .then(data => {
     console.log('data',data);
	 var dane=data[city];
   console.log(dane);
   document.getElementById("temperatura").innerHTML= "temperatura: " + dane.temperatura;
   document.getElementById("wiatr").innerHTML= "wiatr: " + dane.wiatr;
   
   })
   .catch((err) => {
     console.log(err)
    })
}