function tarkista() {
  var kokoNimi = document.getElementById("nimi").value;
  var maili = document.getElementById("email").value;
  var palvelunkieli = document.getElementById("kieli").value;
  var laatikko = document.getElementById("alue").value;

  if (kokoNimi == "") {
    alert("Laittakkee nimi");
    return false;
  } else if (maili == "") {
    alert("Laittakkee sähköposti");
    return false;
  } else if (palvelunkieli == "") {
    alert("Jottain kieltä pittää valita");
    return false;
  } else if (document.querySelector("input[name='palvelua']:checked") == null) {
    //Käytin tässä metodia queryselector joka hakee input, nimellä palvelua, ja tarkistaa että checked ja jos se on null eli tyhjä/false, alerttaa ton valitkee palvelu/Toni/12.4
    alert("Valitkee palvelu");
    return false;
  } else if (laatikko == "") {
    alert("Lissee informaatioo");
    return false;
  } else {
    alert("Teitä palavellaan ihan kohta");
    return true;
  }
}
