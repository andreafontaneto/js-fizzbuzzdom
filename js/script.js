// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

/*
1- richiamare tramite la definzione delle variabili gli elementi del DOM necessari
2- definire il ciclo FOR per la creazione delle iterazioni
3- nel ciclo FOR dare le seguenti istruzioni:
      a) definire l'incremento corretto da 1 a 100
      b) creare l'elemento div che avrà classe .box
      c) dire che all'interno avrà un valore (da 1 a 100)
      d) dire di stampare il risultato all'interno di row con append
      e) definire se il valore creato è divisibile per 3 tramite modulo % quindi aggiungere la classe .fizz
      f) definire se il valore creato è divisibile per 5 tramite modulo % quindi aggiungere la classe .buzz
      g) se il valore creato è divisibile sia per 3 che per 5 tramite %, aggiungere la classe.fizzbuzz
*/

const row = document.querySelector('.row'); // richiamo tramite costante l'elemento con classe .row

// definisco il ciclo FOR

// INIZIO CICLO FOR
for(i = 1; i <= 100; i++){

  const divBox = document.createElement('div'); // creo l'elemento div tramite costante divBox

  divBox.className = 'box'; // assegno la classe .box al nuovo elemento creato
  divBox.innerHTML = i; // gli dico che all'interno deve esserci il valore di incremento "i"

  console.log(i); // i è stata creata ma non stampata nell'html

  row.append(divBox); // l'elemento div creato con costante divBox è stato "appeso" all'interno di row

  // definisco il ciclo IF ELSE

  if(!(i % 3) && !(i % 5)){ // SE sono entrambi multipli di 3 E multipli di 5
    divBox.classList.add('fizzbuzz')
    divBox.innerHTML = 
    `
    ${i}<br>
    fizzbuzz
    `;
  } else if(!(i % 3)){ // ALTRIMENTI SE sono solo multipli di 3
    divBox.classList.add('fizz')
    divBox.innerHTML = 
    `
    ${i}<br>
    fizz
    `;
  } else if(!(i % 5)){ // ALTRIMENTI SE sono solo multipli di 5
    divBox.classList.add('buzz')
    divBox.innerHTML = 
    `
    ${i}<br>
    buzz
    `;
  }

}
// FINE CICLO FOR