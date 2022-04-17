/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let primaParola;
let secondaParola;
let primaParolaFlag = false;
let secondaParolaFlag = false;

while(primaParolaFlag === false){
  primaParola = prompt('Inserisci la prima parola');

  if(isNaN(primaParola) && Boolean(primaParola)){ //Oppure solo primaParola
    primaParolaFlag = true;
  }else{
    primaParolaFlag = false;
  }
  console.log('Prima parola', primaParolaFlag , '----->>', primaParola);

  if(primaParolaFlag === false){
    alert('Non hai inserito una parola, riprovare');
  }
  
}

while(secondaParolaFlag === false){
  secondaParola = prompt('Inserisci la seconda parola');

  if(isNaN(secondaParola) && Boolean(secondaParola)){ //Oppure solo secondaParola
    secondaParolaFlag = true;
  }else{
    secondaParolaFlag = false;
  }
  console.log('Seconda parola', secondaParolaFlag , '----->>', secondaParola);

  if(secondaParolaFlag === false){
    alert('Non hai inserito una parola, riprovare');
  }

}
console.log('Le parole inserite sono corrette!')

if(primaParola.length > secondaParola.length){
  document.getElementById('parole').innerHTML = `${primaParola} - ${secondaParola}`;
  console.log('La parola più lunga è: ', primaParola , '(la prima)');
}else if(primaParola.length < secondaParola.length){
  document.getElementById('parole').innerHTML = `${secondaParola} - ${primaParola}`;
  console.log('La parola più lunga è: ', secondaParola , '(la seconda)');
}else{
  document.getElementById('parole').innerHTML = `${primaParola} - ${secondaParola}`;
  console.log('Le due parole inserite hanno la stessa lunghezza, pertanto vengono stampate entrambe partendo dalla prima');
}