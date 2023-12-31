/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log("GLI ELEMENTI DI QUESTO ARRAY SONO:", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("GLI ELEMENTI IN ORDINE ALFABETICO SONO:", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log("ORDINE INVERSO:", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// const pets = [4]

let pet = "redfish";
pets.splice(pet, 1);
pets.push(pet);
console.log(
  "ELEMENTO CHE IN ESERCIZIO PRECEDENTE ERA IN PRIMA POSIZIONE VA IN ULTIMA",
  pets
);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
let license = "ab123vz";
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = license;
}
console.log("ORA è STATA AGGIUNTA LA PROPRIETà licensePlate", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let kmm = "145678";
for (let i = 0; i < cars.length; i++) {
  cars[i].km = kmm;
}
console.log("AGGIUNTA PROPRIETà KM", cars);

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    cars[i].trims.pop();
  }
}
console.log("RIMOSSO ULTIMO ELEMENTO DI PROPRIETà TRIMS", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    justTrims.push(cars[i].trims[0]);
  }
}
console.log("AGGIUNTO PRIMO ELEMENTO DI TRIMS IN JUStTRIMS", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const fizzC = [];
const buzzC = [];
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0).toLowerCase() === "b") {
    fizzC.push(cars[i].color);
  } else {
    buzzC.push(cars[i].color);
  }
}
console.log("COLORI CORRISPONDENTI A FIZZ:", fizzC);
console.log("COLORI CORRISPONDENTI A BUZZ:", buzzC);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let trentadue = [];
let i = 0;
do {
  trentadue.push(numericArray[i]);
  i++;
} while (i < numericArray.length && numericArray[i - 1] !== 32);
console.log("VALORE:", trentadue);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alphabet = "abcdefghilmnopqrstuvz";
let positionsArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  let char = charactersArray[i].toLowerCase();
  let position = alphabet.indexOf(char) + 1;
  positionsArray.push(
    position > 0 ? position : "CARATTERI NON PRESENTI IN ALFABETO ITALIANO"
  );
}
console.log("POSIZIONI IN ALFABETO ITALIANO:", positionsArray);
