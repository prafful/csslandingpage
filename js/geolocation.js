var position = document.getElementById("location")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(myPosition){
        var lat = myPosition.coords.latitude;
        var lon = myPosition.coords.longitude
        var alt = myPosition.coords.altitude
        var spd = myPosition.coords.speed

        var positionString = "Latitude: " + lat + "<br>"
        positionString = positionString + "Longitude: " + lon + "<br>"
        positionString = positionString + "Altitude: " + alt + "<br>"
        positionString = positionString + "Speed: " + spd

        position.innerHTML = positionString

    })
}