"use strict";

const koirat = [];

for (let i = 0; i < 6; i++) {
    koirat.push(prompt(`Anna koiran ${i + 1} nimi:`));
}

koirat.sort();
koirat.reverse();

const lista = document.querySelector("#target");

for (let i = 0; i < koirat.length; i++) {
    const kohta = document.createElement("li");
    kohta.textContent = koirat[i];
    lista.appendChild(kohta);
}

document.body.appendChild(lista);