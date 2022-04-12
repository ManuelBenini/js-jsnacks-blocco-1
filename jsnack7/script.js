/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/

const moltiplicazione = 2;
let numeroBase = 2;

do{
  document.getElementById('potenze').innerHTML += ` {${numeroBase}}`
  console.log('--', numeroBase);
  numeroBase *= moltiplicazione
}while(numeroBase < 1000);