"use strict";

const name1 = prompt("Give me your name:")

let arpaluku = Math.floor(Math.random() * 4) + 1

switch (arpaluku){
    case 1:
        document.querySelector("#target").innerHTML = `${name1} house is Gryffindor.`;
        break;

    case 2:
        document.querySelector("#target").innerHTML = `${name1} house is Slitherin.`;
        break;

    case 3:
        document.querySelector("#target").innerHTML = `${name1} house is Ravenclaw.`;
        break;

    case 4:
        document.querySelector("#target").innerHTML = `${name1} house is Huffelpuff`;
        break;

    default:
        break;
}