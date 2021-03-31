var numero = "";
var luku = "";
var taulu = ['+','-','*','/','%'];
var index = 0;

function jakojää(){
    document.getElementById("tulos").innerHTML = numero;
    numero = numero / 100;
    document.getElementById("tulos").innerHTML = numero;
}

function lisää(luku)
{
    numero += luku;
    document.getElementById("tulos").innerHTML = numero;
}

function laske() {

    document.getElementById('tulos').innerHTML = eval(numero);
    numero = eval(numero);

}

function poista() {
    numero = "";
    document.getElementById("tulos").innerHTML = numero;
}

function poistaViimeisin() {
    for(var i = 0; i < numero.length; i++)
    {   
        index = i;
    }
    
    numero = numero.substr(0, index);
    document.getElementById("tulos").innerHTML = numero;
}