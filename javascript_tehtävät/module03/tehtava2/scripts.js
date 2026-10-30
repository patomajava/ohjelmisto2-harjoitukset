"use strict";

const guest_amount = Number(prompt("Anna osallistujien lukumäärä:"));
const guests = [];

for (let i = 0; i < guest_amount; i++) {
    guests.push(prompt(`Anna osallistujan ${i + 1} nimi:`));
}

guests.sort()

const lista = document.querySelector("#target")

for (let i = 0; i < guests.length; i++) {
    const kohta = document.createElement("li");
    kohta.textContent = guests[i];
    lista.appendChild(kohta);
}

document.body.appendChild(lista);