/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


// ESERCIZIO CON FOR
const forCycleBtn = document.getElementById('forcycle');

forCycleBtn.addEventListener('click' , function(){
  let somma = 0;
  let numeriUtente;
  
  for(let i = 0; i < 5; i++){
    numeriUtente = parseInt(prompt('Inserire numero'));
    somma = parseInt(somma + numeriUtente);
    console.log(numeriUtente);
  }
  
  document.getElementById('somma').innerHTML = somma;
  console.log(somma);

})


// ESERCIZIO CON WHILE E CONTROLLI
const whileCycleBtn = document.getElementById('whilecycle');

whileCycleBtn.addEventListener('click' , function(){
  let somma = 0;

  let contatore = 0;
  
  while(contatore < 5){
  
    contatore++;
    let numeriUtente = parseInt(prompt('Inserire numero'));

    while (isNaN(numeriUtente)){
      if(isNaN(numeriUtente)){
        alert('Non hai inserito un numero, riprovare')
        numeriUtente = parseInt(prompt('Inserire numero'));
      }
    }

    somma = parseInt(somma + numeriUtente);
    console.log(numeriUtente);
  }
  
  document.getElementById('somma_2').innerHTML = somma;
  console.log(somma);

})