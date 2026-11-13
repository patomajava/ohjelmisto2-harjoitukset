"use strict";
console.log("the script starts");

function synchronousFunction() {
  let number = 1;
  for (let i = 1; i < 100000; i++) {
    number += i;
    console.log("synchronousFunction running");
  }
  console.log("regular function complete", number);
}

async function asynchronousFunction() {
  // asynkroninen funktio määritellään async-avainsanalla
  console.log("asynchronous download begins");
  try {
    // virheenkäsittely: try/catch/finally
    const response = await fetch("http://127.0.0.1:3000/airport/EFHK"); // aloitetaan datan lataus; fetch palauttaa lupauksen, joka ratkeaa Response-olioksi
    const jsonData = await response.json(); // muunnetaan vastauksen JSON-data JavaScript-olioksi json()-metodilla
    console.log(jsonData.ICAO, jsonData.Name); // tulostetaan tulos konsoliin
  } catch (error) {
    console.log(error.message);
  } finally {
    // finally = suoritetaan joka tapauksessa, onnistui suoritus tai ei
    console.log("asynchronous load complete");
  }
}

synchronousFunction();
asynchronousFunction();

console.log("the script ends");