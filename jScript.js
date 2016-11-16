<<<<<<< HEAD
=======
// only run this script when the page is loaded
>>>>>>> f4062b2bc6f42f4cc73e090e41ec8555e78f7d07
window.onload = main;

function main() {

<<<<<<< HEAD
    var jsonData; // will hold the data returned from the ajax request
    function getDate() {
	var dateTime = new Date();
	return (
		dateTime.getDate() + "/" +
		(dateTime.getMonth()+1) + "/" +
		dateTime.getFullYear() + "|" +
		dateTime.getHours() + ":" +
		dateTime.getMinutes() + ":" +
		dateTime.getSeconds()
		);
    }

    document.getElementById("loadJSONButton").onclick = function() {
        loadJSON();
    }

    function loadJSON() {
        // create an AJAX request
        var xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
		// wait for server/browser processes to complete
		if (this.readyState == 4 && this.status == 200) {
                    console.log(getDate() + " AJAX request successful");
                    jsonData = xhttp.responseText;
                    document.getElementById("insertJSON").innerHTML = JSON.parse(JSON.stringify(jsonData));
                } else {
                    console.log(getDate() +  "Ready State: " +
				this.readyState + ", Status: " + this.status);
                }
            }
        } else {
            alert("This broswer is too outdated to process modern AJAX requests. Please upgrade before proceeding.");
        }
        // send the AJAX request
        xhttp.open("GET", "sampleData.json", true);
        xhttp.send();
    }
=======
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
          // this will need to be changed once we can test from the devHost,
          // due to cross-source restrictions on AJAX
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
>>>>>>> f4062b2bc6f42f4cc73e090e41ec8555e78f7d07
}
