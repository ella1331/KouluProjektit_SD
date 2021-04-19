function tarkistus()
{
    var kayttis = document.getElementById("käyttis").value.length;
    var passu = document.getElementById("salis").value.length;
    alert(passu);

    if( kayttis == 0 || passu == 0 || passu < 15)
    {
        
        error();
    }

    else
    {
        peliin();
    }
    
};

function error() {
    window.location.href = "error401.html"
}
    
        
        
        

function peliin()
{
    window.location.href = "pelisivu.html"
    
};