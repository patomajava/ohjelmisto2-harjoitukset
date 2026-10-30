"use strict";

const num1 = prompt("Anna ensimmäinen luku:")
const num2 = prompt("Anna toinen luku:")
const num3 = prompt("Anna kolmas luku:")
const num4 = prompt("Anna neljäs luku:")
const num5 = prompt("Anna viides luku:")

const numbers = [num1, num2, num3, num4, num5]


for (let i = numbers.length; i >= 0; i--) {
    console.log(numbers[i])
}