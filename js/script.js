/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         document.writeln(j+1)
//     }
//     document.writeln("<br>");
// }

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
                contenitore.innerHTML += `<div class="item item2">${i}</div>`
            }
        break;

        case 3:
            for (let i = 1; i <= 49; i++) {
                contenitore.innerHTML += `<div class="item item3">${i}</div>`
            }
        break;
    }
});

let attivo = document.querySelector(".item");
attivo.addEventListener('click', function () {
    attivo.classList.add("active");
});