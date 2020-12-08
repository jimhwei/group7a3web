
// Javascript Owner: Korey Hayes
// Source: https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickDrop() { 
  var drop = document.getElementById("navLinks");
  if (drop.style.display === "block") {
    drop.style.display = (window.onclick = "none");
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
}
// End Owner: Korey Hayes

////////////////////
// Owner : Honglin (Jim) Wei
// Date  : Dec 6 (v1)
// From  : // https://developers.google.com/maps/documentation/javascript/adding-a-google-map#all
////////////////////

// Initialize init Map function
function initMap(){
  // Give constant variable for fleming location
    const fleming = {lat:44.3431848,lng:-78.7450429};
    
    // Uses the map element to center at fleming, and zoom to lvl 13
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 13,
        center: fleming,
      });

    // Marker pointing at fleming
    const marker = new google.maps.Marker({
      position: fleming,
      map: map,
    });
}
// End Owner: Honglin (Jim) Wei