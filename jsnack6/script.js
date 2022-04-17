/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let numeriUtente = parseInt(prompt('Inserire numeri di cui eseguire la potenza'))

while(isNaN(numeriUtente)){
  alert('Non hai inserito un numero riprovare')
  numeriUtente = parseInt(prompt('Inserire numeri di cui eseguire la potenza'))
}

let potenzaNumeri;

let x = 1
while(x <= numeriUtente){
  potenzaNumeri = Math.pow(x, 3);
  x++
  document.getElementById('potenze').innerHTML += `<h1> ${potenzaNumeri} </h1>`
  console.log('I numeri sono:' ,potenzaNumeri);
}

/* OPPURE 
let x = 1
while(x <= numeriUtente){
  potenzaNumeri = x*x*x
  x++
  document.getElementById('potenze').innerHTML += `<h1> ${potenzaNumeri} </h1>`
  console.log('I numeri sono:' ,potenzaNumeri);
}
*/


/*  OPPURE
for(let i = 1; i <= numeriUtente; i++){
  potenzaNumeri = i*i*i 
  document.getElementById('potenze').innerHTML += `<h1> ${potenzaNumeri} </h1>`
  console.log(potenzaNumeri);
}
*/