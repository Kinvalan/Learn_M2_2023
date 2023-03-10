/*
Bruk .reduce() til å gjøre et array med verdier om til 1 samla verdi.
*/


// Lager arrayet


const numberArray = [30, 15, 20, 5];



/*
Lager en arrow funksjon, den heter totalPrice.
Vi skriver at den inneholder numberArray sin reduce og at reduce tar total og item om parametre,
Funksjonen returnerer totalen pluss item-et. 

Dvs. at totalPrice er lik totalen + første item, så den nye verdien pluss neste item, osv.
*/

 const totalPrice = numberArray.reduce((total, item) => {
     return total + item;
 }, 0)



// Logger ut resultatet.

console.log(totalPrice);

