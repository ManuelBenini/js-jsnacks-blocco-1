/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

const array = [];

for(let i = 0; i < 6; i++){
  const userNumber = parseInt(prompt('Inserire un numero'))
  if(userNumber % 2){
    array.push(userNumber)
  }
}

document.getElementById('array').innerHTML = `Dati i numeri inseriti, avrai come array finale : [${array}}`;

console.log('questo è l\'array che avremo dopo l\'inserimento dei numeri: ' , array );