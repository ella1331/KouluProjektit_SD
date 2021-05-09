let tallennaButton = document.getElementById('painike');
let resetButton = document.getElementById('reset');
let form = document.getElementById('kyselyLomake');

//functio kyselylomakkeelle
form.addEventListener("submit" , function (e) {
  e.preventDefault();
}
)

//tallentaa lokaalisti
tallennaButton.addEventListener("click", function(e)
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
}
