// Luodaan muuttujat
var tila = 0;
var eka, toka, lopputulos;

// Sijoitetaan korttien kuvat taulukkoon
var varit =
[
"url(images/kuva0.png)",
"url(images/kuva1.png)",
"url(images/kuva2.png)",
"url(images/kuva3.png)",
"url(images/kuva4.png)",
"url(images/kuva5.png)",
"url(images/kuva6.png)",
"url(images/kuva7.png)",
];

function valinta(e, kortti)
{
    if(!e)
    {
      var e = window.event;
    }

    document.getElementById(kortti).style.background = varit[Math.floor((kortti - 1) / 2)];

    if (tila == 0)
    {
        eka = kortti;
        tila = 1;
    }
    else if (tila == 1)
    {

        toka = kortti;

        // Katsotaan mikä on korttien yhteenlaskettu tulos
        lopputulos = eka - toka;

        // Katsotaan mikä on pienemmän kortin arvo
        var pienempiKortti = (Math.min(eka, toka));

        // Katsotaan mikä on pienemmän kortin jakojäännös
        var jakojaannos = pienempiKortti%2;

        // Jos jakojäännös on yksi ja lopputulos -1 tai 1 löydetään pari
        if(jakojaannos == 1 && (lopputulos == -1 || lopputulos == 1))
        {
            // Vaihdetaan korttien luokan nimi
            document.getElementById(eka).className ="havaittu_td";
            document.getElementById(toka).className ="havaittu_td";

            // Annetaan korteille pohjan mukainen tausta
            document.getElementById(eka).style.background="url(./tausta.gif); ";
            document.getElementById(toka).style.background ="url(./tausta.gif); ";

            // Otetaan korteista onclik- atribuutti pois
            document.getElementById(eka).removeAttribute("onclick");
            document.getElementById(toka).removeAttribute("onclick");

            // Määrätään tila alkamaan uudelleen alusta
            tila = 0;

        }
        else
        {
            // Jos kortteja ei löydetä, luodaan läpinäkyvä divikkuna peittämään lauta
            var divPeitto =  document.getElementById('div');

            // Annetaa div-ikkunalle sijainti
            divPeitto.style.left = + 0 + "px";
            divPeitto.style.top = + 0 + "px";

            // Tuodaan div-ikkuna esiin
            divPeitto.style.display = "block";

            // Aloitetaan nimetön functio, suoritus on ajanmukainen
            setTimeout(function () {

            // Laitetaan korteille taas ns. pimeä puoli näkyviin
            document.getElementById(eka).style.background="skyblue";
            document.getElementById(toka).style.background ="skyblue";

            // Otetaan peitto pois, jotta peliä voidaan jatkaa.
            divPeitto.style.display = "none";

            // Annetaan muuttujalle tila arvoksi 0
            tila = 0;
            // Määritetään aika, kauanko kortit ovat esillä
            }, 1000);
     }
    }
}
