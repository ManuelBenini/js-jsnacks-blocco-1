/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

let numeroUtente = prompt('Inserire numero di 4 cifre');
let numberFlag = false;
let lenghtFlag = false;

while(numberFlag === false || lenghtFlag === false){
  if(isNaN(numeroUtente)){
    numberFlag = false;
    alert('Non hai inserito dei numeri, riprovare');
    numeroUtente = prompt('Inserire numero di 4 cifre');
  }else{
    numberFlag = true;
  } 

  if(numeroUtente.length < 4){
    lenghtFlag = false;
    alert('Non hai inserito numero di 4 cifre, riprovare');
    numeroUtente = prompt('Inserire numero di 4 cifre');
  }else if(numeroUtente.length > 4){
    lenghtFlag = false;
    alert('Hai inserito numero maggiore di 4 cifre, riprovare');
    numeroUtente = prompt('Inserire numero di 4 cifre');
  }else{
    lenghtFlag = true;
  } 
}

const arrayNumeri = [];
let sommaCifre = 0;

for(let i = 0; i < numeroUtente.length; i++){
  arrayNumeri.push(numeroUtente[i]);
  console.log('numeri' , numeroUtente[i]);
  console.log('array' , arrayNumeri[i]);

  /* OPPURE 
  arrayNumeri.push(numeroUtente.substring(i, i - 1));
  console.log(arrayNumeri);
  */
}

for(let i = 0; i < arrayNumeri.length; i++){
  sommaCifre = sommaCifre + parseInt(arrayNumeri[i]);
  console.log('numeri presi dall\'array', arrayNumeri[i]);
  console.log('Somma totale --->', sommaCifre);
}

document.getElementById('somma').append(sommaCifre)
