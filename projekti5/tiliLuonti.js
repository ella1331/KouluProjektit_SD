//Kuvan näyttäminen esikatseluna koodi alkaa
var lataaKuva = function (event) {
  var output = document.getElementById("esikatselu");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
}; //Kuvan näyttäminen esikatseluna koodi loppuu
