"use strict";

let nopan_luku = null;
const lista = document.querySelector("#target")

function nopanheitto() {
    nopan_luku = Math.floor(Math.random() * 6) + 1;
    return nopan_luku;
}

while (nopan_luku !== 6) {
    nopan_luku = nopanheitto();
    const kohta = document.createElement("li");
    kohta.textContent = nopan_luku;
    lista.appendChild(kohta);
}