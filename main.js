
$(document).ready(function() {
  $.simpleWeather({
    location: 'Peoria, IL',
    unit: 'f',
    success: function(weather) {
      temp = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
  
      $("#weather").html(temp);
    }
  });
});