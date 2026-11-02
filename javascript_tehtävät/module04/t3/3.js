'use strict';
const names = ['John', 'Paul', 'Jones'];



const lista = document.getElementById("target")

for (let i = 0; i < 3; i++) {
    const kohta = document.createElement("li");
    kohta.textContent = names[i];
    lista.appendChild(kohta);
}