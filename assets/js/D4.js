/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(`Area calcolata ${area(4, 9)}`);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num, num2) {
  let result = num + num2;

  if (num === num2) {
    return result * 3;
  }
  return result;
}

console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(number, range = 19) {
  let num = Math.abs(number - range);

  if (number > range) {
    return number * 3;
  } else {
    return num;
  }
}

console.log(crazyDiff(20));
console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(numInt) {
  if ((numInt >= 20 && numInt <= 100) || numInt === 400) {
    return true;
  } else return false;
}

console.log(boundary(58));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
  const contEpicode = string.toUpperCase().startsWith("EPICODE");

  if (contEpicode) {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(int) {
  if (int < 1) {
    return console.log("error");
  } else if (int % 3 === 0 || int % 7 === 0) {
    return true;
  }
  return false;
}

console.log(check3and7(203));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
  let stringArray = string.split("");
  let stringReversed = stringArray.reverse();

  let stringJoin = stringReversed.join("");

  return stringJoin;
}

console.log(reverseString("epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
  const words = string.split(" ");

  const arrOfNewWords = [];

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    const firstChar = element.charAt(0);
    const firstCharUpper = firstChar.toUpperCase();
    const remainingLetters = element.slice(1);
    const wordCapitalized = firstCharUpper + remainingLetters;
    arrOfNewWords.push(wordCapitalized);
  }
  return arrOfNewWords;
}

console.log(upperFirst("Oggi è una belissima giornata"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
