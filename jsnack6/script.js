/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const numeriUtente = parseInt(prompt('Inserire numeri di cui eseguire la potenza'))
let potenzaNumeri;

for(let i = 1; i <= numeriUtente; i++){

  
  potenzaNumeri = i*i*i
  document.getElementById('potenze').innerHTML += `<h1> ${potenzaNumeri} </h1>`
  console.log(potenzaNumeri);
}