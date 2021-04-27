// korttitaulukko sisältää kaikki kortit
let card = document.getElementsByClassName("card");
let cards = [...card];

// korttipakka
const deck = document.getElementById("card-deck");

// muuttuja klikkausille eli siirroille
let moves = 0;
let counter = document.querySelector(".moves");

// muuttuja korttimatcheille, vähä niinkuin tinderissä ikään
let matchedCard = document.getElementsByClassName("match");

 // poistu iconi popupissa (x)
 let closeicon = document.querySelector(".close");

 // popupille muuttuja
 let modal = document.getElementById("popup1")

 // taulukko avatuillekorteille
var openedCards = [];

// pakan seikoitus whileloopilla

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// sivuston avautuessa/päivitettäessä sekoittaa pakan uusiksi
document.body.onload = startGame();

// funktio uuteen peliin
function startGame(){

    // avatutkortit taulukko tyhjäksi
    openedCards = [];

    // sekoita pakka
    cards = shuffle(cards);
    // poistaa kaikki classi määritykset korteista, eli onko avattu match jne.
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }

    // resettaa siirrot
    moves = 0;
    counter.innerHTML = moves;

    //resettaa kellon
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 minuuttia 0 sekuntia";
    clearInterval(interval);

}

// määrittää allaolevat classit päälle, kun ylhäällä ne poistettiin peliä alustettaessa
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

// lisää käännetyt kortit listaan ja katsoo onko kortit match vai ei
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }

};

// kun kortit on match, lisää molempiin kortteihin classit match ja disabled, toisaalta myös poistaa molemmista show open ja no-event
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];

}

// kun kortit ei ole match, lisää classi unmatched, 1,1sek päästä suorittaa funktion missä poistetaan classit show open no-event ja unmatched
//tyhjentää avatutkortit (openedCards) taulukon taas 2 uutta kortia varten
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}

// hetkellisesti lisää kortteihin classin disabled, eli niitä ei pysty valitsemaan. Tämä funktio kutsutaan ylläolevassa funktiossa juuri ennen kuin timeout 1,1sek on kulunut
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

// avaa kortit ja laittaa ne matchattuihin kortteihin ja disabloi ne
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

// laskee pelaajan siirrot
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //kello lähtee käyntiin ekasta siirrosta
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

// pelikello
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" minuuttia "+second+" sekuntia ";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

//onnittelee kun kaikki kortit on arvattu, näyttää popupin ja siirrot ja ajan
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // näyttää onnittelu popupin
        modal.classList.add("show");

        //näyttää siirrot, ajan popupissa
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("totalTime").innerHTML = finalTime;
        //sulkee popupin
        closeModal();
    };
}

//  sulkee popupin funktio
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}

// pelaa uudestaan funktio
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

// looppi joka lisää event listenerin joka korttiin
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
 };
