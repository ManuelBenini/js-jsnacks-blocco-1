/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const arrayInvitati = ['giacomo', 'andrea', 'john', 'michele', 'miguel'];
let nomeUtente;
let flagInvito = false;

while(flagInvito === false){
  nomeUtente = prompt('Inserire il proprio nome');

  for(let i = 0; i < arrayInvitati.length; i++){
    if(nomeUtente === arrayInvitati[i]){
      flagInvito = true;
    }
    console.log(arrayInvitati[i]);
  }

  if(flagInvito === false){
    alert('Non sei presente nell\'elenco degli invitati, riprovare');
  }
  
}

document.getElementById('invito').innerHTML = `Sei presente nell'elenco degli invitati, ti aspettiamo!`