/*
Lag en funksjon som tar inn en liste av strenger som en parameter.
 
Funksjonen returnerer true hvis noen av strengene i lista har en lengde på mer enn 5 tegn.

Returnerer false hvis ingen av strengene har en lengde på mer enn 5 tegn. 

Bruk some-metoden til å løse denne oppgaven, og ikke objekter.
*/



// Lager arrayet 

const stringArray = ['Frank', 'Timmy', 'Sebastian'];



// Lager funksjonen som skal brukes som parameteret i callback funksjonen.

const checkElemLength = (stringElement) => stringElement.length > 5;


// Lager en ny const og lagrer callback funksjonen med some metoden i den

const result = stringArray.some(checkElemLength);


// Logger resultatet

console.log('Heres the array: ' + stringArray);

console.log('We have checked if one of the names in the array have a length thats greater than 5. We found that its: ' + result);