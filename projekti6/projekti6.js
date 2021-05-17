let resetButton = document.getElementById('reset');
let form = document.getElementById('kyselyLomake');



//tallentaa lokaalisti
form.addEventListener("submit", function(e)
{
  let etu = document.getElementById('etunimi');
  let suku = document.getElementById('sukunimi');
  let lähi = document.getElementById('lähiosoite');
  let posti = document.getElementById('postinumero');
  let paikka = document.getElementById('postiToimiPaikka');
  let puh = document.getElementById('puh');
  let maili = document.getElementById('maili');

  etu = etunimi.value;
  localStorage.setItem('etunimi', etu);

  suku = sukunimi.value;
  localStorage.setItem('sukunimi', suku);

  lähi = lähiosoite.value;
  localStorage.setItem('lähiosoite', lähi);

  posti = postinumero.value;
  localStorage.setItem('postinumero', posti);

  paikka = postiToimiPaikka.value;
  localStorage.setItem('postiToimiPaikka', paikka);

  puh = puh.value;
  localStorage.setItem('puh', puh);

  maili = maili.value;
  localStorage.setItem('maili', maili);
  //Lisätty tyhjennys funktio joka tyhjentää formin tallennuksen jälkeen, myöskin ilmoitus tallennuksesta lisätty/Toni 17.5
  tyhjennys();
  alert("Tietosi on tallennettu");

}
)

//tyhjentää lomakkeen
resetButton.addEventListener ("click", function ()
{
  let etu = document.getElementById('etunimi');
  let suku = document.getElementById('sukunimi');
  let lähi = document.getElementById('lähiosoite');
  let posti = document.getElementById('postinumero');
  let paikka = document.getElementById('postiToimiPaikka');
  let puh = document.getElementById('puh');
  let maili = document.getElementById('maili');

  etu.value = '';
  suku.value = '';
  lähi.value = '';
  posti.value = '';
  paikka.value = '';
  puh.value = '';
  maili.value = '';
}
)

// tyhjentää local storagen
function deleteItems(){
  localStorage.clear();
  location.reload();
  //Lisätty sivun päivitys, niin haetut tiedot häipyvät myös pois näkyvistä/Toni 17.5
}

//Hakee tallennetut tiedot /Toni 17.5
function listaa(){
  document.getElementById("otsikkoLaatikko").innerHTML = "Tallennetut tiedot:";
  let etuNimi = localStorage.getItem('etunimi');
  document.getElementById("retunimi").innerHTML = "Etunimi: "+ etuNimi;
  let sukuNimi = localStorage.getItem('sukunimi');
  document.getElementById("rsukunimi").innerHTML = "Sukunimi: "+ sukuNimi;
  let osoite = localStorage.getItem('lähiosoite');
  document.getElementById("rosoite").innerHTML = "Osoite: "+ osoite;
  let postiNumero = localStorage.getItem('postinumero');
  document.getElementById('rpostinumero').innerHTML = "Postinumero: "+ postiNumero;
  let postiPaikka = localStorage.getItem('postiToimiPaikka');
  document.getElementById('rpostipaikka').innerHTML = "Postitoimipaikka: "+ postiPaikka;
  let puhelin = localStorage.getItem('puh');
  document.getElementById('rpuhelin').innerHTML = "Puhelin: "+ puhelin;
  let email = localStorage.getItem('maili');
  document.getElementById("remail").innerHTML = "Email: "+ email;
  
}
//Tallennettaessa kutsuu tätä funktiota, tyhjentää lomakkeen tallennuksen jälkeen/Toni/17.5
function tyhjennys(){
  let etu = document.getElementById('etunimi');
  let suku = document.getElementById('sukunimi');
  let lähi = document.getElementById('lähiosoite');
  let posti = document.getElementById('postinumero');
  let paikka = document.getElementById('postiToimiPaikka');
  let puh = document.getElementById('puh');
  let maili = document.getElementById('maili');

  etu.value = '';
  suku.value = '';
  lähi.value = '';
  posti.value = '';
  paikka.value = '';
  puh.value = '';
  maili.value = '';
}