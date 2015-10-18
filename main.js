
$(document).ready(function() {
      $("#question").click(function(){
           $("#answer").slideToggle(function(){
               
           });
    });
    
  $.simpleWeather({
    location: 'Peoria, IL',
    unit: 'f',
    success: function(weather) {
      temp = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      $("#weather").html(temp);
        var outside = weather.temp;
        if(outside >= 20){
           $("#answer").html("I am FREEZING it is" +"  "+outside+" "+"outside");
       }
        if(outside >= 30){
           $("#answer").html("I am way to cold it is" +"  "+outside+" "+"outside");
       }
       if(outside >= 40){
           $("#answer").html("I am feeling  cold it is" +"  "+outside+" "+"outside");
       }
        if(outside >= 50){
           $("#answer").html("I am a little cold it is" +"  "+outside+" "+"outside");
       }
        if(outside >= 60){
           $("#answer").html("I am feeling grate it is" +"  "+outside+" "+"outside");
       }
        if(outside >= 70){
           $("#answer").html("I am feeling ok it is" +"  "+outside+" "+"outside");
       }
        if(outside >= 80){
           $("#answer").html("I am feeling a little hot it is" +"  "+outside+" "+"outside");
       }
         if(outside >= 90){
           $("#answer").html("I am feeling really hot it is" +"  "+outside+" "+"outside");
       }
    }
  });
});
