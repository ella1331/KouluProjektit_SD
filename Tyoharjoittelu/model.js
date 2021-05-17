function upload(event)
{
  var output = document.getElementById("model");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function (){
    URL.revokeObjectURL(output.src);
  };
};

//Lisää valittuun nappiin classin selected, korostaa punaiseksi
function selected()
      {
        var header = document.getElementById("model");
        var hotspots = header.getElementsByClassName("hotspot");

        for (var i = 0; i < hotspots.length; i++)
        {
          hotspots[i].addEventListener("click", function()
          {
            var current = document.getElementsByClassName("selected");
            if (current.length > 0)
            {
              current[0].className = current[0].className.replace(" selected", "");
            }
            this.className += " selected";
          });
        }
      };

      //Laskee lisätyt hotspotit
      var hotspotCounter = 0;
      function addHotspot(MouseEvent)
      {
        var inputtext = document.querySelector('textarea').value;
        //Jos ei inputtiin ole syötetty tekstiä, pyytää syöttämään ensin lisättävän tekstin
        if (inputtext == "")
        {
          alert("Syötä ensin teksti minkä haluat lisätä hotspottiin");
        }
        else{
          const viewer = document.querySelector('#model');
          const rect = viewer.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const positionAndNormal = viewer.positionAndNormalFromPoint(x, y);

          //Jos mallia ei klikattu, palauta sijainti konsoliin
          if (positionAndNormal == null)
          {
            console.log('no hit result: mouse = ', x, ',',y);
            return;
          }
          const {position, normal} = positionAndNormal;

          //hotspotin luominen
          const hotspot = document.createElement('button');
          hotspot.slot = `hotspot-${hotspotCounter ++}`;
          hotspot.classList.add('hotspot');
          hotspot.id = `hotspot-${hotspotCounter}`;
          hotspot.dataset.position = position.toString();
          if (normal != null)
          {
            hotspot.dataset.normal = normal.toString();
          }
          viewer.appendChild(hotspot);
          console.log('mouse = ', x, ',',y,positionAndNormal);

          //Lisää teksti viimeisimpään hotspottiin
          var element = document.createElement("div");
          element.classList.add('annotation');
          element.appendChild(document.createTextNode(inputtext));
          document.getElementById(`hotspot-${hotspotCounter}`).appendChild(element);

          document.querySelector('textarea').value = "";
        }
      };

      //Hotspotin poisto
      function removeHotspot()
      {
        var el = document.getElementById(`hotspot-${hotspotCounter}`);

        if (el == null)
        {
          alert("Ei hotspotteja poistettavana");
        }
        else
        {
          hotspotCounter --;
          el.remove()
        };
      };