/*
Bruk every() metoden til å sjekke om alle elementene i arrayet har stor forbokstav.
*/


// Lager et array


const myArray = ['Nils', 'Petter', 'Johan', 'Drake'];



// Lager callback funksjonen min. Inneholder krava for sjekk av stor for-bokstav.


/*
Lager en funksjon og sier den skal ta imot et element.

Funksjonen returnerer 'true' hvis:
Den første bokstaven i elementet vi får inn er helt likt den første bokstaven i elementet vi får inn med stor bokstav.

På denne måten kan vi si at funksjonen kun returnerer true om alle elementenes forbokstaver er store.
*/

function checkCasing(element) {
  return element.charAt(0) === element.charAt(0).toUpperCase();
}



// Lager en ny const og setter den lik arrayet sin every med callback funksjonen som parameter.

const result = myArray.every(checkCasing);



// Logger resultatet, ser om det blir 'true' eller 'false'.

console.log('We checked if all elements starts with an uppercase letter, and the result is: ' + result);


