"use strict";

const valikko = document.getElementById("operation");
const button = document.getElementById("start");
const vastauselementti = document.getElementById("result")

button.addEventListener("click", function() {

    const numero1 = parseInt(document.getElementById("num1").value);
    const numero2 = parseInt(document.getElementById("num2").value);
    let vastaus = null;
    
    if (valikko.value == "add") {
        vastaus = numero1 + numero2;
    }
    else if (valikko.value == "sub") {
        vastaus = numero1 - numero2;s
    }
    else if (valikko.value == "multi") {
        vastaus = numero1 * numero2;
    }
    else if (valikko.value == "div") {
        vastaus = numero1 / numero2;
    }

    vastauselementti.textContent = vastaus;
})