//Tonin ehdotusta, laittakee omaa kommenttia ja muokatkaa vapaasti

function tarkista() {
    var etunimi = document.forms["kysely"]["fname"].value;
    var sukunimi = document.forms["kysely"]["lname"].value;


    
    if (etunimi == "") {
      alert("Laittakee etunimi");
      return false;
    }
    else if (sukunimi == "") {
            alert("Laittakee sukunimi");
            return false;
        }

    else {
        alert("Tietonne on lähetetty");
        return true;
    }
  }

