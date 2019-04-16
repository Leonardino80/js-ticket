var km = prompt('quanti kilometri vuoi fare?');
console. log(km);
var ticket_adulti = km * 0.21 ;
console. log(ticket_adulti)
var età = prompt ('quanti anni hai?');
console. log(età);
if (età <= 14 ) { var prezzo_minori = ticket_adulti * 0.8;
alert('il prezzo per i minori di 14 anni è' + ' ' + prezzo_minori + ' ' + '€')};
if (età >= 65 ) { var prezzo_anziani = ticket_adulti * 0.6;
alert('il prezzo per gli over 65 è' + ' ' + prezzo_anziani + ' ' + '€');
}else { alert('il prezzo standard è' + ticket_adulti + ' ' + '€')};
document.getElementById('biglietto_emesso').innerHTML = 'Il prezzo del tuo biglietto è';
