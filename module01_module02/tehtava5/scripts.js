"use strict";

let vuosiluku = prompt("Anna vuosiluku:");
vuosiluku = parseInt(vuosiluku);

if (vuosiluku % 4 === 0 && vuosiluku % 100 !== 0 || vuosiluku % 400 === 0) {
    document.querySelector("#target").innerHTML = `Vuosiluku ${vuosiluku} on karkausvuosi.`
}
else {
    document.querySelector("#target").innerHTML = `Vuosiluku ${vuosiluku} ei ole karkausvuosi.`
}