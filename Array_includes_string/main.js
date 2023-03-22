/*
Bruk .includes() til å sjekke om et array inneholder strengen "almost".
*/



// Lager et array med tekst.

const textArray = ['This is almost perfect'];



/*
Sier at konstanten wordOfArray er lik textArray med indeks på 0
(dvs hele?) sin includes og søker på almost. 
Sånn sjekker vi om 'almost' er i arrayet.
*/

const wordOfArray = textArray[0].includes('almost');



// Logger ut resultatet. Får 'true' i konsollen.

console.log(wordOfArray);





