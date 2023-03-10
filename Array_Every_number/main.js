/*
Bruk .some() metoden for å sjekke om alle tallene i arrayet er over 100
*/


// Lager arrayet

const numberArray = [184, 101, 420, 152, 543];



// Lager callback funksjonen som skal sendes som parameter til every metoden

const checkNumberSize = (number) => number > 100;



// Lagrer arrayet sin every med funksjonen over som parameter i en ny const

const result = numberArray.every(checkNumberSize);


// Logger resultatet

console.log('We checked if the array only contains numbers over 100, and the result is that its: ' + result);