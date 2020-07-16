var parola = prompt("inserisci una parola");
// PROCEDIMENTO SENZA FUNZIONE
// CREO LA VARIABILE VUOTA
// var parola2 = "";
// // ATTRAVERSO IL CICLO DECREMENTO E PRENDO DALL' ULTIMA ALLA PRIMA LETTERA DELLA PAROLA
//
// for ( var i = parola.length -1; i >= 0 ; i--) {
//   parola2 += parola[i];
// }
// // ADESSO CONTROLLO SE LE DUE PAROLE SONO UGUALI E SE LO SONO VUOL DIRE CHE è PALINDROMA
//
//  if ( parola2 === parola) {
//    document.getElementById("risultato").innerHTML = "La parola è palindroma";
//  } else {
//    document.getElementById("risultato").innerHTML = "La parola non è palindroma";
//  }


// ORA CREO LA FUNZIONE
palindroma(parola);

console.log(palindroma(parola));
// NON RESISTUISCO NULLA

function palindroma ( stringa) {
  var stringa2 = "";
  for ( var i = stringa.length -1; i >= 0 ; i--) {
    stringa2 += stringa[i];
  }
  if ( stringa2 == stringa) {
    document.getElementById("risultato").innerHTML = "La parola è palindroma";
  } else {
    document.getElementById("risultato").innerHTML = "La parola non è palindroma";
  }
  return 0;
}
