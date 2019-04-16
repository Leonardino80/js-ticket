var nome = prompt('Inserisci il tuo nome');

console. log(nome)

var cognome = prompt('Inserisci il tuo cognome..');

console. log(cognome)

var km = prompt('quanti kilometri vuoi fare?');

console. log(km);

var ticket_adulti = km * 0.21 ;

console. log(ticket_adulti);

var età = prompt ('quanti anni hai?');

console. log(età);

if (età < 18 ) {
  var prezzo_minori = ticket_adulti * 0.8;
  alert('il prezzo per i minori di 18 anni è' + ' ' + prezzo_minori + ' ' + '€');
  console. log(prezzo_minori);
  document.getElementById('biglietto_emesso').innerHTML = nome + ' ' + cognome + '  Il prezzo del tuo biglietto è' + prezzo_minori '€';
}

else if (età > 64 ) {
  var prezzo_anziani = ticket_adulti * 0.6;
  alert('il prezzo per gli over 65 è' + ' ' + prezzo_anziani + ' ' + '€');
  console. log(prezzo_anziani);
  document.getElementById('biglietto_emesso').innerHTML = nome + ' ' + cognome + '  Il prezzo del tuo biglietto è' + prezzo_anziani '€';
}

else {
  alert('il prezzo standard è' + ticket_adulti + ' ' + '€');
  document.getElementById('biglietto_emesso').innerHTML = nome + ' ' + cognome + '  Il prezzo del tuo biglietto è' + ticket_adulti '€';
}
