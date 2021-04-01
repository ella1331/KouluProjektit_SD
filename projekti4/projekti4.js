 
var enterPainike = document.getElementById("nappi");
enterPainike.addEventListener("click", lisääListaanPainettaessa); //Klikkauksen kuuntelu;"click" on attribuutti, sen perässä tulee kutsuttava funktio (tässä tapauksessa lisääListaanPainettaessa)

var input = document.getElementById("kenttä");
input.addEventListener("keypress", lisääListaanEnterillä); //Näppäinpainalluksen kuuntelu;"keypress" on attribuutti, sen perässä tulee kutsuttava funktio (tässä tapauksessa lisääListaanEnterillä)

var ul = document.querySelector("ul.b"); //Hakee html:stä listan (tässä tapauksessa ul class="b")

function textareaPituus() //funktio joka hakee textareasta syötettyjen merkkien pituuden
{
    return input.value.length;
    console.log(textareaPituus()) 
}

function luoLista()
{
    var li = document.createElement("li");  //luo "li"-nimisen elementin

    if(input.value != '') //tarkistaa onko textarea tyhjä, jos EI ole tyhjä (!=), suorittaa tämän
    {
        li.appendChild(document.createTextNode(input.value)); //lisää li-elementtiin textarean sisällön
        ul.appendChild(li); //Lisää li-elementin ul-elementtiin
        input.value = ""; //Tyhjentää textarean
    }
    //Värjäystoiminnon koodi alkaa
    function valmisTehtävä()
    {
        li.classList.toggle("valmis"); //Värjää lisätyn tehtävän vihreäksi/kutsuttaessa uudelleen poistaa värjäyksen (toggle)
    }
    li.addEventListener("click", valmisTehtävä); //kutsuu funktion valmisTehtävä (eli värjäyksen päälle/pois)
    //Värjäystoiminnon koodi loppuu

    //Poistopainikkeen koodi alkaa
    var poisto = document.createElement("button"); //Luo x poistomerkin li-elementtiin (luo <button>)
    poisto.appendChild(document.createTextNode("X")); //Luo x poistomerkin li-elementtiin (luo <button>X</button>)
    li.appendChild(poisto); //Lisää x kaikkiin li-elementteihin
    poisto.addEventListener("click", poistaTehtävä); //Kuuntelee klikkausta, klikattessa suorittaa funktion poistaTehtävä
    //Poistopainikkeen koodi päättyy

    function poistaTehtävä()
    {
        //li.classList.add("delete"); //Funktio li-elementin poistoon
        li.style.display = "none";   //Jyrille tiedoksi, tehtiin vähän helpommin tää juttu ;)
    }
} //luoLista funktio päättyy tähän

function lisääListaanPainettaessa() 
{
    if(textareaPituus() > 0) //Tarkistaa onko tekstialueelle syötetty mitään
    {
        luoLista(); //kutsuu luoLista funktiota (eli lisää listaan kamaa)
    }
}

function lisääListaanEnterillä(event)
{
    if(textareaPituus() > 0 && event.which === 13) //tarkistaa tekstialueeseen on syötetty jotain JA tämän lisäksi tarkistaa onko Enter painettu (Enter näppäimen avainkoodi on 13, voidaan kirjoittaa event.whichin sijasta myös muotoon event.keyCode === 13)
    {
        luoLista(); //kutsuu luoLista funktiota (eli lisää taas kamaa listaan)
    } 
}