(function () {
  //Weather Function
  function weather() {
    var location = document.getElementById("location");
    var apiKey = "99205d9d8c768513f61624c90c83f0e0";
    var url = "https://api.forecast.io/forecast/";
    var proxy = "https://cors-anywhere.herokuapp.com/"

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    currenttemp="";
    currenticon="";
    var cdt;
    $.getJSON(proxy + url + apiKey + '/' + latitude + ',' + longitude + '?' + "units=si", function(forecast) {
      currenticon = forecast.currently.icon;
      currenttemp = Math.round(forecast.currently.temperature);
      cdt = function (currenticon){
        if(forecast.currently.icon === "partly-cloudy-day" || "partly-cloudy-night" )
          return "cloudy";
        else
          return currenticon;
      }();
      $("#some").html("It's\nFucking "+currenttemp+"º\n and <span id=with-anim>"+cdt+"</span>\n"+"<span id=subtext>You don't want to see the weather do you?</span>");
  });
  }
  function error() {
    some.innerHTML = "Unable to retrieve your location";
  }
}
  function parser(fcast){
    $("#some").html("It's\nFucking\n<span id=with-anim>hi</span>\n"+"<span id=subtext>You don't want to see the weather do you?</span>");
    //use replace() subsitute for display
  }
  
  weather();

})();