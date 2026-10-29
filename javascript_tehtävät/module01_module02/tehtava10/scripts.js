"use strict";

const nopat_määrä = Number(prompt("Anna noppien lukumäärä:"));
const silmaluku = Number(prompt("Anna tarkkailemasi silmälukujen summa:"));

let kerrat = 0;
let kerrat2 = 0;
let onnistuneet_heitot = 0;

while (kerrat !== 10000) {
    kerrat++;
    kerrat2 = 0;
    let silmäluvut_summa = 0;

    while (kerrat2 < nopat_määrä) {
        kerrat2++;
        silmäluvut_summa += Math.floor(Math.random() * 6) + 1;
    }

    if (silmäluvut_summa === silmaluku) {
        onnistuneet_heitot++;
    }
}

const todennäköisyys = (onnistuneet_heitot / 10000) * 100;

document.querySelector("#target").innerHTML = `Todennäköisyys saada silmälukujen summa ${silmaluku} noppien määrällä ${nopat_määrä} on ${todennäköisyys.toFixed(2)}%`;