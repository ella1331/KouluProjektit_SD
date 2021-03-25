function tarkista() {
var kokoNimi = document.getElementById('nimi').value;
var maili = document.getElementById("email").value;
var palvelunkieli = document.getElementById('kieli').value;
var valinta = document.getElementById('palvelu').checked;
var laatikko = document.getElementById('alue').value;

if (kokoNimi == "") {
  alert ("Laittakkee nimi");
  return false;
}

else if (maili == "") {
  alert ("Laittakkee sähköposti");
  return false;
}

else if (palvelunkieli == "" ) {
  alert ("Jottain kieltä pittää valita");
  return false;
}

else if (valinta == "") {
  alert ("Mittee palavelluu laitettaan");
  return false;
}

else if (laatikko == "") {
  alert ("Lissee informaatioo");
  return false;
}

else {
  alert ("Teitä palavellaan ihan kohta");
  return true;
}



}
