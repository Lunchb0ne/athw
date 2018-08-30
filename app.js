$("#some").html("It's\nFucking\n<span id=with-anim>BBQ </span>\ntime");
(function () {
  //Weather Function
  function weather() {
    var location = document.getElementById("location");
    var apiKey = "***REMOVED***";
    var url = "https://api.forecast.io/forecast/";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longitude is " + longitude + "°";
      $.getJSON(url + apiKey + '/' + latitude + ',' + longitude, function(forecast) {
        console.log(forecast);
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

  weather();

})();