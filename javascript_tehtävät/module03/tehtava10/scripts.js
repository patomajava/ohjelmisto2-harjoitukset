"use strict";

const ehdokkaiden_maara = Number(prompt("Anna ehdokkaiden määrä:"))
const ehdokkaat = [];

for (let i = 0; i < ehdokkaiden_maara; i++) {
    const nimi = prompt(`Anna ehdokkaan ${i + 1} nimi:`)

    const ehdokas = {
        firstName: nimi,
        votes: 0,
    };

    ehdokkaat.push(ehdokas);
}

const aanestajien_maara = Number(prompt("Anna äänestäjien määrä:"))

for (let i = 0; i < aanestajien_maara; i++) {
    let ääni_kenelle = prompt(`Ketä henkilö ${i + 1} äänestää:`)

    for (let i = 0; i < ehdokkaiden_maara; i++) {
        if (ääni_kenelle == ehdokkaat[i].firstName) {
            ehdokkaat[i].votes += 1;
        }
    }
}

ehdokkaat.sort((a, b) => b.votes - a.votes);

console.log(`Voittaja on ${ehdokkaat[0].firstName}: ${ehdokkaat[0].votes} ääntä`)
console.log("Tulokset:")
for (let i = 0; i < ehdokkaiden_maara; i++) {
    console.log(`${ehdokkaat[i].firstName}: ${ehdokkaat[i].votes} ääntä`)
}