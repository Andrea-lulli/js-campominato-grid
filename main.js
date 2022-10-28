// L'utente clicca su un bottone che genererà una griglia di 
// gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si 
// colora di azzurro ed emetto un messaggio in console con il 
// umero della cella cliccata.

//griglia
let griglia = document.getElementById("griglia");

//funzione per creare i quadrati
function quadrato() {

  let quadrato = document.createElement("div");
  quadrato.classList.add("box");
  return quadrato;
}

//funziona per i numeri dentro i qquadrati
let numero = 0;


// funzione per premere bottone
function dati() {

  //funzione per creare 100 quadrati
  for (let i = 0; i < 100; i++) {
    numero = 1 + numero;

    let Quadrato = quadrato();

    numero = numero;

    Quadrato.append(numero)

    griglia.append(Quadrato);
    
    //this per acceddere alla funzione con il click
    Quadrato.addEventListener("click", function () {

      this.classList.toggle("active")
      console.log(this.innerHTML);

    })
  }
}

