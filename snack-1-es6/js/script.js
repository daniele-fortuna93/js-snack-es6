// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// 1. Creo array di bici
var bici = [
  {
    nome: "Bottecchia",
    peso: 3000
  },
  {
    nome: "Bianchi",
    peso: 4000
  },
  {
    nome: "Trek",
    peso: 10000
  },
  {
    nome: "Santa Cruz",
    peso: 8000
  }
];
// 2. Creo variabile a cui assegno il primo oggetto dell'array bici
var biciLeggera = bici[0];

// 3. Ciclo l'array per confrontare i pesi delle biciclette
for (var i = 1; i < bici.length; i++) {
  if ( bici[i].peso < biciLeggera.peso ) {
    biciLeggera = bici[i];
  }
}
// 4. Stampo la bici più leggera

const {nome, peso} = biciLeggera;
console.log(`${nome} è la bici più leggera con un peso di ${peso} grammi.`);
