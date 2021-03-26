function tarkistus()
{
    var nimi = document.getElementById("nimisyotto").value;
    var maili = document.getElementById("emailsyotto").value;
    var ikä = document.getElementById("ikasyotto").value;

    if(nimi == "")
    {
        alert("Anna nimi");
    }
    else if(nimi.length < 4)
    {
        alert("Anna pidempi nimi");
        return false;
    }

else
   { emailIsValid(maili);
    
   
    function emailIsValid (maili) {
    var tarkistaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(tarkistaEmail.test(maili))
        { ikaTarkistus(ikä);

          function ikaTarkistus(ikä) {

            if(ikä == "")
                {
                alert("Syötä ikä");
                }

                else if(!/^[0-9]+$/.test(ikä))
                {
                 alert("Anna ikä numeroina");   
                }
                else if(ikä < 13 || ikä > 100 )
                {
                    alert("Suositusikä kuntosalille on yli 13-vuotias, ja alle 100-vuotias");
                }
                else
                {
                    alert("Tietosi ovat lähetetty PT Elina Luumille, mukavaa treeniä!");
                }
          }
        }
        
        else
        {
             
        alert("Anna oikea sähköpostiosoitteesi"); 
        }
    }
}
}
                
            
        
    

    

        




        
        





