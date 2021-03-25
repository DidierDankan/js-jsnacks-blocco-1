//SNACK 5
//Crea due array di numeri che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var a = [1, 2, 5, 6, 7];
console.log(a)
var b = [2, 4, 5];
console.log(b)

if (a.length > b.length) {
    while(a.length > b.length) {

    b.push(Math.floor( Math.random() * 10));
    }

} else {
    while (a.length < b.length) {

        a.push( Math.floor( Math.random() * 10));
    }
}

console.log(a, b)





//SNACK QUATRO
//Crea un array di numeri interi
//fai la somma di tutti gli elementi che sono in posizione dispari


var numeri = [24, 45, 3, 78, 5, 3, 9, 35, 19]
console.log(numeri)

var somma = 0;

for(var i = 0; i < numeri.length; i++) {
    console.log(numeri[i]);
    console.log([i]);  

    if (i % 2 !== 0 ) {
        somma += numeri[i];
    }
}

console.log(somma)





// SNACK TRE
// Generatore di “nomi cognomi” casuali: 
// prendendo una lista di nomi 
// una lista di cognomi, 
// Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ['zoe', 'didier', 'mario', 'chiara'];
console.log(nomi)
var cognomi = ['ursinni', 'dankan', 'fanizzi', 'giarrusso'];
console.log(cognomi)

var nomiCognomi = [];
var size = 3

for ( var i = 0; i < size; i++) {
    var randomNomiIndex = Math.floor( Math.random() * nomi.length );
    var randomCognomiIndex = Math.floor( Math.random() * cognomi.length);
    

    var randomNomiCognomi = nomi[randomNomiIndex] + ' ' + cognomi[randomCognomiIndex];

    nomiCognomi.push(randomNomiCognomi);
}

console.log(nomiCognomi)





//SANCK DUE
//Inserisci un numero,
//se è pari stampa il numero, 
//se è dispari stampa il numero successivo

var numero = parseInt( prompt('inserice un numero') );


if (numero % 2 === 0) {
    console.log(numero);

} else {
   console.log(numero + 1);
}



//SNACK UNO
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

var times = 5;
var somma = 0;

var numero;

for (var i = 1; i <= times; i++) {
    numero = parseInt( prompt('Inserice un numero ' + i + ' di ' + times) );
    console.log(numero);

    somma += numero;
}

console.log(somma);