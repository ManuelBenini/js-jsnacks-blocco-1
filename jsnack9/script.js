/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

const normalBtn = document.getElementById('somma_normale');

normalBtn.addEventListener('click' , function(){

  const quantitaNumeri = 10;
  let sommaTot = 0;
  let media = 0;
  
  for(let i = 1; i <= quantitaNumeri; i++){
    console.log('Numeri da 1 a 10', i);
    sommaTot += i
    console.log('Numeri sommati', sommaTot);
  }
  
  media = sommaTot / quantitaNumeri
  console.log('Numeri divisi', media);
  
  document.getElementById('stampa_normale').innerHTML = `La somma dei primi 10 numeri &egrave; ${sommaTot}, mentre la media &egrave; ${media}`;

})





// EXTRA -- Calcolo con formula ridotta

const formulaBtn = document.getElementById('somma_formula');

formulaBtn.addEventListener('click' , function(){

  let primoNumero = parseInt(prompt('Inserisci il primo numero di un intervallo di cui verranno sommati tutti i numeri'));

  let secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

  let valorePrimoNumero;

  console.log('primo numero' , primoNumero );

  console.log('secondo numero' , secondoNumero );
  
  if(primoNumero > secondoNumero){
    
    valorePrimoNumero = primoNumero;
    primoNumero = secondoNumero;
    secondoNumero = valorePrimoNumero ;
    alert('Hai inserito il primo valore maggiore del secondo, abbiamo cambiato l\'ordine dei due elementi per proseguire con i calcoli')

    console.log('Primo valore ==>', primoNumero , 'secondo valore ==>' , secondoNumero);
  }

  const numeroOperazioni = ((secondoNumero - primoNumero) + 1) / 2;

  console.log('numero operazioni da eseguire', numeroOperazioni);

  const somma = (primoNumero + secondoNumero) * numeroOperazioni;

  console.log('somma elementi dell\'intervallo', somma);

  const media = (primoNumero + secondoNumero) / 2;

  console.log('Media degli elementi', media);

  document.getElementById('stampa_formula').innerHTML = `la somma di tutti i numeri presenti nell'intervallo &egrave; ${somma} , <br> mentre la media &egrave; ${media}.`;

})



// Calcolo con While e for

const forBtn = document.getElementById('somma_for');

forBtn.addEventListener('click' , function(){
 
  let numeroDivisibileFor;

  console.log('Prima del ciclo', isNaN(numeroDivisibileFor));

  // WHILE DI CONTROLLO PER VEDERE SE L'UTENTE INSERISCE CORRETTAMENTE UN NUMERO
  while(isNaN(numeroDivisibileFor) === true || numeroDivisibileFor <= 0){

    numeroDivisibileFor = parseInt((prompt('Inserisci numero di cui vengono sommati tutti i numeri precedenti')));

    console.log('dopo l\'assegnazione ciclo', isNaN(numeroDivisibileFor));

    if(isNaN(numeroDivisibileFor) == true){
      alert('Hai inserito un valore errato, si prega di inserire un numero positivo');
    }else if(numeroDivisibileFor <= 0){
      alert('Hai inserito un numero negativo, si prega di inserire un numero positivo');
    }
  }
  // -- WHILE DI CONTROLLO PER VEDERE SE L'UTENTE INSERISCE CORRETTAMENTE UN NUMERO

  let somma = 0;
  let media;

  // CICLO FOR PER EFFETTUARE LA SOMMA DELL'INTERVALLO
  for(let i = 1; i <= numeroDivisibileFor; i++){

    console.log('blabla', i);

    somma = somma + i;

    media = somma / i

    console.log('---->', numeroDivisibileFor);
    console.log('somma', somma);
    console.log('media-->', media);

    document.getElementById('stampa_for').innerHTML = `la somma di tutti i numeri precedenti al numero inserito &egrave;: ${somma} e la media ${media}`;

  }

})