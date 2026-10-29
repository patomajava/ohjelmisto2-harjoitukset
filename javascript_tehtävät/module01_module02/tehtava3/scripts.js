"use strict";

const number1 = prompt("Anna ensimmäinen kokonaisluku:");
const number2 = prompt("Anna toinen kokonaisluku:");
const number3 = prompt("Anna kolma kokonaisluku:");

const intNumber1 = parseInt(number1)
const intNumber2 = parseInt(number2)
const intNumber3 = parseInt(number3)

let summa = intNumber1 + intNumber2 + intNumber3
let tulo = intNumber1 * intNumber2 * intNumber3
let keskiarvo = summa / 3

document.querySelector("#target1").innerHTML = `Lukujen summa on ${summa}.`;
document.querySelector("#target2").innerHTML = `Lukujen tulo on ${tulo}.`;
document.querySelector("#target3").innerHTML = `Lukujen keskiarvo on ${keskiarvo}.`;