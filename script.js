var km = prompt('quanti kilometri vuoi fare?');
console. log(km);
var ticket_adulti = km * 0.21 ;
console. log(ticket_adulti)
alert('il prezzo standard è' + ticket_adulti + '€');
var età = prompt ('quanti anni hai?')
if (età < 14 ) { var prezzo_minori = ticket_adulti * 0.4}
alert('il prezzo per i minori di 14 anni è' + '' + prezzo_minori + '' + '€')
