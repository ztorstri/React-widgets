// only run this script when the page is loaded
window.onload = main;

function main() {

  document.getElementById("loadJSONButton").onclick = function() {
    loadJSON();
  }

  function loadJSON() {
    // create an AJAX request
    var xhttp;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          alert(" :) ");
        }
      }
    } else {
      alert("This broswer is too outdated to process modern AJAX requests. Please upgrade before proceeding.");
    }
    // send the AJAX request
    xhttp.open("GET", "sampleData.JSON", true);
    xhttp.send();
  }
}
