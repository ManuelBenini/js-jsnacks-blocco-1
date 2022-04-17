/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/
let firstNumber;
let secondNumber;
let firstNumberFlag = false;
let secondNumberFlag = false;

while(firstNumberFlag === false){
  firstNumber = prompt('Inserisci il primo numero');

  if(!isNaN(firstNumber) && Boolean(firstNumber)){ //Oppure solo firstNumber
    firstNumberFlag = true
  }else{
    firstNumberFlag = false;
  }
  console.log('First number', firstNumberFlag , '----->>', firstNumber);

  if(firstNumberFlag === false){
    alert('Non hai inserito un numero, riprovare');
  }
  
}

while(secondNumberFlag === false){
  secondNumber = prompt('Inserisci il secondo numero');

  if(!isNaN(secondNumber) && Boolean(secondNumber)){ //Oppure solo secondNumber
    secondNumberFlag = true
  }else{
    secondNumberFlag = false;
  }
  console.log('Second number', secondNumberFlag , '----->>', secondNumber);

  if(secondNumberFlag === false){
    alert('Non hai inserito un numero, riprovare');
  }

}

/*
OPPURE
while(firstNumberFlag === false || secondNumberFlag === false){
  firstNumber = prompt('Inserisci il primo numero');
  secondNumber = prompt('Inserisci il secondo numero');

  if(!isNaN(firstNumber)){
    firstNumberFlag = true
  }else{
    firstNumberFlag = false;
  }
  console.log('first number', firstNumberFlag , '----->>', firstNumber);
  
  if(!isNaN(secondNumber)){
    secondNumberFlag = true
  }else{
    secondNumberFlag = false;
  }
  console.log('second number', secondNumberFlag, '----->>', secondNumber);

  if(firstNumberFlag === false && secondNumberFlag === true){
    alert('Non hai inserito un numero nel primo caso, riprovare');
  }else if(firstNumberFlag === true && secondNumberFlag === false){
    alert('Non hai inserito un numero nel secondo caso, riprovare');
  }else if(firstNumberFlag === false && secondNumberFlag === false){
    alert('Non hai inserito un numero in nessun caso, riprovare');
  }
}
*/

console.log('I numeri inseriti sono corretti!')

if(firstNumber > secondNumber){
  document.getElementById('numero_maggiore').innerHTML = `
  Il numero più grande tra i due inseriti &egrave;: ${firstNumber}`;
  console.log('Il maggiore è: ', firstNumber , '(il primo)');
}else if(firstNumber == secondNumber){
  document.getElementById('numero_maggiore').innerHTML = `
  I due numeri sono uguali`;
  console.log('I due numeri inseriti sono uguali!');
}else{
  document.getElementById('numero_maggiore').innerHTML = `
  Il numero più grande tra i due inseriti &egrave;: ${secondNumber}`;
  console.log('Il maggiore è: ', secondNumber , '(il secondo)');
}

