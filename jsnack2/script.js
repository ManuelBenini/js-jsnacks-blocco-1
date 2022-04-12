/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let primaParola;
let secondaParola;
let primaParolaFlag = false;
let secondaParolaFlag = false;

while(primaParolaFlag === false || secondaParolaFlag === false){
  primaParola = prompt('Inserisci la prima parola');
  secondaParola = prompt('Inserisci la seconda parola');

  if(!isNaN(primaParola)){
    primaParolaFlag = false
  }else{
    primaParolaFlag = true;
  }
  console.log('prima parola', primaParolaFlag , '----->>', primaParola);
  
  if(!isNaN(secondaParola)){
    secondaParolaFlag = false
  }else{
    secondaParolaFlag = true;
  }
  console.log('seconda parola', secondaParolaFlag , '----->>', secondaParola);;

  if(primaParolaFlag === false && secondaParolaFlag === true){
    alert('Non hai inserito una parola nel primo caso, riprovare');
  }else if(primaParolaFlag === true && secondaParolaFlag === false){
    alert('Non hai inserito una parola nel secondo caso, riprovare');
  }else if(primaParolaFlag === false && secondaParolaFlag === false){
    alert('Non hai inserito una parola in nessun caso, riprovare');
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