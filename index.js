// 1.	Izračunaj sumu svih parnih brojeva nekog proizvoljnog niza od minimalno 10 članova.

const array = [7, 4, 5, 0, 2, 7, 8, 9, 5, 3, 10, 8]

let pairSum = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
    pairSum += array[i];
    }
}

console.log (pairSum)


// 2.	Pronađi najmanji i najveći član niza i zbroji te brojeve, pa ako je zbroj manji od 10, ispiši "Zbroj je jednoznamenkast", a ako je veći od 10, ispiši taj broj

let min = array[0]
let max = array[0]

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
    min = array[i]
    }
    if (array[i] > max) {
    max = array[i]
    }
}

let minMaxSum = min + max

if (minMaxSum < 10) {
    console.log ("Zbroj je jednoznamenkast")
} else {
    console.log (minMaxSum)
}


// 3.	Iz niza stringova unijetih preko konzole, izbaci sve što nije voće

const stringArr = process.argv.slice(2)

const voceArr = []

for (let i = 0; i < stringArr.length; i++) {
    switch (stringArr[i]) {
        case "jabuka":
        case "naranča":
        case "kruška":
        case "ananas":
        voceArr.push(stringArr[i])
            break;
        default:
            break;
    }
}

console.log (voceArr)


// 4.	Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda

const randomArr = [7, "kreda", 5, "škola", 2, "kuća", 8, null, false, 5]

const numArr = []

for (let i = randomArr.length - 1; i >= 0; i--) {
    if (typeof randomArr[i] === 'number') {
    numArr.push(randomArr[i])
    }
}

console.log (numArr)


/* 5.	Uz pomoć petlji, kreiraj ovakav ispis:
0123456789
012345678
01234567
0123456
012345
01234
0123
012
01
0 */

let string = "0123456789"

for (let i = string.length; i > 0; i--) {
    string = string.slice(0, i)
    console.log (string)
}