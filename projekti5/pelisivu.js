//Korttien taustat
var tausta4x4 = ["kuva0.png", "kuva1.png", "kuva2.png", "kuva3.png", "kuva4.png","kuva5.png", "kuva6.png", "kuva7.png", "kuva0.png", "kuva1.png", "kuva2.png", "kuva3.png", "kuva4.png","kuva5.png", "kuva6.png", "kuva7.png"];
var tausta5x5 = [];
var tausta6x6 = [];

//Muuttuja laskuria varten
var stausta = 0;
//Muuttuja ekana klikattua korttia varten, eli vähän niinkuin vanha (niinkuin minäkin)
//Verrataan vanhaa ja uutta korttia keskenään
var vanha = -1;
//Muuttuja vanhan kortin alt-ominaisuutta varten
var valtti;

//varsinainen taulukon luonti-funktio, jota kutsutaan HTML:n onload-komennolla
function luoPeli() 
{
    sekoitetut = sekoita(tausta4x4); //sekoitetaan alkuperäinen taulukko
    var peliAlue = document.getElementById("peliAlue"); //haetaan html-sivulta paikka mihin peli tulee "peliAlue"
    var taulukko = document.createElement("table"); //luodaan peliä varten taulukkoelementti
    var taulukonSolut = document.createElement("tbody"); //Luodaan peliä varten taulukon sisältöä varten elementti

    for(var i=0; i < 4; i++) //Luodaan taulukoon rivielementti
    {
        var rivi = document.createElement("tr");

        for(var j=0; j < 4; j++)
        {
            var solu = document.createElement("td"); //Luodaan sarake-elementti
            var sisältö = document.createTextNode(""); //Luodaan elementti, johon kortti laitetaan
            
            
            solu.setAttribute("alt", sekoitetut[(stausta)]); //Määritetään kortin alt-muuttuja, 0-15 eli jokaisella kortilla omansa
            solu.setAttribute("id", "solu" + stausta); //Määritetään kortin id-muuttuja: "solu" + stausta. esim.solu12
            solu.setAttribute("name", stausta); //Määritetään kortin name-muuttuja 0-15, jokaisella omansa
            solu.setAttribute("onclick", "nayta("+stausta+");"); //Määritetään kortille onclick- toiminta, eli klikatessa kutsuu nayta funktiota
            
            
            
            stausta += 1; //Kasvatetaan laskuria yhdellä

            solu.appendChild(sisältö); //syötetään ylläolevat  muutokset kortin-tietoihin
            rivi.appendChild(solu); //syötetään ylläolevat muutokset rivin tietoihin 

        }
        
        taulukonSolut.appendChild(rivi); //syötetään rivit taulukon tbody-elementtiin
    }
    taulukko.appendChild(taulukonSolut); //Syötetään lopuksi taulukon tbody-elementti taulukkoon
    peliAlue.appendChild(taulukko); // Viimeiseksi syötetään taulukko sille varattuun paikkaan
    taulukko.setAttribute("border", "2"); //Määrittää taulukolle CSS-arvo border jolle 2px
    
}

function sekoita(taulukko) //funktio joka sekoittaa pakan eli muuttujan tausta4x4
{
    taulukko.sort(function(a,b){return 0.5 - Math.random()});
    return taulukko; //Syöttää sekoitetun pakan (eli siis taulukon) muuttujaan taulukko
}

function nayta(numero) //Funktio mikä kutsutaan kun korttia klikataan
{
    var tunnus = document.getElementById("solu" +numero); // haetaan napautettu kortti
    var altti = tunnus.getAttribute("alt"); //haetaan napautetun kortin alt-muuttuja
    if(vanha != -1) //tarkistetaan, ovatko kortit samat
    {
        valtti = vanha.getAttribute("alt"); //jos on, hakee vanhan kortin alt muuttujan
    }
    else{
        valtti = vanha; //muussa tapauksessa syötetään siihen -1
    }
    tunnus.innerHTML = '<img src="images/'+altti+'">';
    if(altti == valtti)
    {
        var altti = tunnus.getAttribute("alt");

        vanha.innerHTML = '<img src="images/'+altti+'">';

        tunnus.innerHTML = '<img src="images/'+altti+'">';
    }

    else
    {
        vanha = tunnus;
        odota(tunnus);
    }
}

    function odota(xxx) 
    {
        setTimeout(function(){
            xxx.innerHTML = "";
        }, 1000);
    }