console.log("location file loaded");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // const locationString = `Your latitude is ${position.coords.latitude}, and longitude is ${position.coords.longitude}`;
  // Display the location string or use it in some way
  console.log(
    `Your latitude is ${position.coords.latitude}, and longitude is ${position.coords.longitude}`
  ); // For demonstration, log it to the console
}
getLocation();
