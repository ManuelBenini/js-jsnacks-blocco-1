/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

const numeri = 10;
let sommaTot = 0;
let media = 0;

for(let i = 1; i <= numeri; i++){
  console.log('Numeri da 1 a 10', i);
  sommaTot += i
  console.log('Numeri sommati', sommaTot);
}

media = sommaTot / numeri
console.log('Numeri divisi', media);

document.getElementById('somma').innerHTML = `La somma dei primi 10 numeri &egrave; ${sommaTot}, mentre la media &egrave; ${media}.`