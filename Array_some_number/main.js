/*
Bruk .some() array metoden til å finne ut om det stemmer at arrayet inneholder et tall større enn 10.
Logg så resultatet til konsollen.
*/


// Lager et nytt array "numbers" og skriver inn verdier.

const numbers = [2, 11, 6, 4];

/* 
Lager en ny arrow funksjon, den heter "containsNumOver10". 
Den tar ett parameter "num" og returnerer sann om num er større enn 10.
*/

const containsNumOver10 = (num) => num > 10;

/*
Lager en ny konstant "result" og sier den er lik numbers arrayet sin some. 
Sender inn "containsNumOver10" funksjonen som parameter (callback funksjon.)
*/

const result = numbers.some(containsNumOver10);

/*
Logger resultatet, det vil bli true eller false. 
Det er avhengig av om numbers arrayet inneholder minst ett tall som er større enn 10.
*/

console.log(result);










