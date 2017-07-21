var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.darksky.net/forecast/2effcc71cee86e61fa953eaf45ac7c2f/33.8246952,-111.9235652",
  "method": "GET",
  "dataType": "jsonp",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "771f22e5-0bd9-ba27-926e-fc3cb068b4a5"
  }
}

$.ajax(settings).done(function (response) {


   var temperature = document.createElement('div');
   temperature.innerText = "Actual Temp: " + Math.round(response.currently.temperature) + " F";
   document.getElementById('text').append(temperature);

   var apparentTemperature = document.createElement('div');
   apparentTemperature.innerText = "Feel's Like: " + Math.round(response.currently.apparentTemperature) + " F";
   document.getElementById('text').appendChild(apparentTemperature);

   var humidity = document.createElement('div');
   humidity.innerText = "Relative Humidity: " + (response.currently.humidity)*100 + "%";
   document.getElementById('text').appendChild(humidity);

   var icon = document.createElement('div');
   icon.innerText = response.currently.icon.toUpperCase();
   document.getElementById('text').appendChild(icon);
});
