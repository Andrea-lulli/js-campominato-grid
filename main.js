// L'utente clicca su un bottone che genererà una griglia di 
// gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si 
// colora di azzurro ed emetto un messaggio in console con il 
// umero della cella cliccata.

let griglia = document.getElementById("griglia");

function quadrato() {

  let quadrato = document.createElement("div");
  quadrato.classList.add("box");
  return quadrato;
}

let numero = 0;


// funzione recupero dati
function dati() {

  for (let i = 0; i < 100; i++) {
    numero = 1 + numero;
    let Quadrato = quadrato();
    numero = numero;
    Quadrato.append(numero)
    griglia.append(Quadrato);

    Quadrato.addEventListener("click", function () {
      this.classList.toggle("active")
    })
  }


}

//   // funzione sconto in base all'eta utente
//   if (eta == "2") {


//     prezzoFinale = (prezzoBiglietto - (prezzoBiglietto * 0.2)).toFixed(2);


//   } else if (eta == "3") {

//     prezzoFinale = (prezzoBiglietto - (prezzoBiglietto * 0.4)).toFixed(2);


//   } else {

//     prezzoFinale = prezzoBiglietto;
//   }

//   // funzione nome e cognome utente
//   let risultatoNome = document.getElementById("risultatonome").innerHTML = ` ${nome} `;

//   // funzione tipo del biglietto
//   let tipoBiglietto = document.getElementById("bgstandard").innerHTML = "Biglietto Standard";

//   // funzione numero carrozza
//   let numeroCarrozza = document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

//   // funzione codice CD
//   let codiceCp = document.getElementById("codicecp").innerHTML = Math.floor(Math.random() * 10000);

//   // funzione prezzo finale
//   let prezzo = document.getElementById("risultato").innerHTML = `${prezzoFinale}€`;
// }

