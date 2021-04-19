
var kortti_valittu = false;
var eka, toka, lopputulos;
var varit = ["red", "green", "blue"];

function valinta(kortti)
{
    document.getElementById(kortti).style.backgroundColor = varit[Math.floor((kortti - 1) / 2)];

    if (!kortti_valittu)
    {
        kortti_valittu = true;
        eka = kortti;
    }

    else
    {
        toka = kortti;
        lopputulos = eka - toka;

        if(lopputulos == -1 || lopputulos == 1)
        {
            document.getElementById(eka).style.backgroundColor = "black";
            document.getElementById(toka).style.backgroundColor = "black";
        }
        else
        {
            alert('Parit eivät täsmänneet');

            document.getElementById(eka).style.backgroundColor = "teal";
            document.getElementById(toka).style.backgroundColor = "teal";
        }

        kortti_valittu = false;
    }
}
