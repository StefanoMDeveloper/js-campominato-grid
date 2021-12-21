/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

let bottone = document.getElementById("gioca");
bottone.addEventListener('click', function(){
    let livello = parseInt(document.getElementById("difficolta").value);
    let contenitore = document.querySelector(".container");
    contenitore.innerHTML = "";
    contenitore.classList.add("bordo");

    switch (livello) {
        case 1:
            for (let i = 1; i <= 100; i++) {
                contenitore.innerHTML += `<div class="item">${i}</div>`
            }
        break;

        case 2:
            for (let i = 1; i <= 81; i++) {
                contenitore.innerHTML += `<div class="item2 item">${i}</div>`
            }
        break;

        case 3:
            for (let i = 1; i <= 49; i++) {
                contenitore.innerHTML += `<div class="item3 item">${i}</div>`
            }
        break;
    }

    let caselleTotali = document.querySelectorAll(".item");
    let bombe = [];
    let numero;
    let posizione;
    

    //inserimento bombe negli elementi della griglia
    //creazione array per le bombe con il random
    while (bombe.length < 16) { //controllo array per non ripetere i numeri
        numero = Math.floor(Math.random() * caselleTotali.length +1);
        if (bombe.includes(numero)) {
            
        }else{
            bombe.push(numero);
        }
        
    }

    //inserimento click sulla griglia
    let attivi = document.querySelectorAll(".item"); //seleziono tutti gli elementi della griglia
    for (let i = 0; i < attivi.length; i++) {
        //inserisco la funzione di click
        attivi[i].addEventListener("click", function () {
            let attivo = this;
            attivo.classList.add("active");

            //controllo vittoria
            vittoria(caselleTotali);
        });
      
    }

    
    console.log(bombe);

    // inserimento bombe
    for (let i = 0; i < bombe.length; i++) {
        posizione = bombe[i]-1;
        caselleTotali[posizione].addEventListener("click", function () {
            let bomba = this;
            bomba.classList.add("bomb");
            sconfitta();
        });
    }

});


function sconfitta() {
    let messaggio = document.getElementById("punteggio");

    let punteggio = document.querySelectorAll(".active");

    messaggio.innerHTML = "Hai perso. <br> Il tuo punteggio è di "+ (punteggio.length-1) +" Punti.";

}

function vittoria(caselleTotali) {
    let punteggio = document.querySelectorAll(".active");

    if (punteggio.length == (caselleTotali.length-16)) {
        let messaggio = document.getElementById("punteggio");
        messaggio.innerHTML = "Hai VINTO!! <br> Il tuo punteggio è di "+ (punteggio.length-1) +" Punti.";

    }
}