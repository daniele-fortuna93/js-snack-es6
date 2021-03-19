// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Funzioni
function numeroRandom(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

// 1. Creo array di objects
const squadre = [
  {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0
  }
];
console.log(squadre);

// 2. Creo nuovo array vuoto
let nomeFalli = [];

// 3. Ciclo tutto l'arrai di object per assegnare le chiavi
for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = numeroRandom(20,50);
  squadre[i].falliSubiti = numeroRandom(30,70);
}
 // 4. Creo i nuovi oggetti con le caratteristiche che mi servono
for (let i = 0; i < squadre.length; i++) {
  const { nome, falliSubiti } = squadre[i];

  nomeFalli.push({nome, falliSubiti}); // Pusho nell'array l'oggetto con le sole chiavi nome e falliSubiti
}
// 5. Stampo il nuovo array
console.log(nomeFalli);
