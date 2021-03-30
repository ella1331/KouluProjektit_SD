var arvattava = Math.floor(Math.random()*10)+1;
var kerrat = 0;



function arvaa(arpa){
      
       
    var x = arpa.value;
    
    if(kerrat <= 2){
   
    if(x == arvattava)
    {    
        alert("Onnea sulle, oikeempa valitsit!"
                + " Arvauskertoja: " + kerrat + " Peli alkaa alusta!");
                location.reload(); //Sivuston automaattinen päivitys (Flex)
    }
    else if(x > arvattava) 
    {    
        kerrat++;
        alert("On se kyl vähä pienempi");
    }
    else if (x < arvattava)
    {
        kerrat++;
        alert("Kokkeile isompaa hyvä immeinen");
    }
    
}



else {
    alert("Game over! Peli alakaa alusta");
location.reload(); //Laitettiin sivuston päivitys automaattiseksi, powered by Google
}

}


    


    






