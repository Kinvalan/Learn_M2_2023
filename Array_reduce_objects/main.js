/*
Bruk reduce() til å redusere verdier til 1 samla verdi.
*/

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// --------------------------------------------------------------------------------

/*
Vi lager en ny arrow-funksjon og setter den lik characters sin reduce.

Her tar reduce imot flere parametre. 
    sum - accumulator (det vi reduserer verdien til å bli)
    character - hver enkelte character
    0 - startveriden til accumulator-en

Det som returneres av funksjonen er da: 
    Den reduserte verdien + alle karakter objektene sine height verdier.
*/


const totalHeight = characters.reduce((sum, character) => {
    return sum + character.height;
}, 0)



// Logger ut resultatet

console.log('Den samla verdien for høydene er: ' + totalHeight);


// --------------------------------------------------------------------------------


// Samme som over men, med masse istedenfor høyde.


const totalMass = characters.reduce((sum, character) => {
    return sum + character.mass;
}, 0);


console.log('Den samla verdien for massene er: ' + totalMass);


// ---------------------------------------------------------------------------------


// Bruk reduce for å finne ut av hvor mange av karakterene har de forskjellige øye-fargene. 


const charactersByEyeColor = characters.reduce((sum, character) => {
    const color = character.eye_color;

    if(sum[color]) {                  // Hvis accumulatoren/sum allerede har en egenskap av sum.eye_color. / Hvis vi allerede har sett en øyefarge.
        sum[color]++ ;                // Hvis vi allerede har denne øyefargen satt inne i objektet, så øker vi den med 1.
    }
    else{                             
        sum[color] = 1;               // Ellers så har vi allerede har sett denne øyefargen 1 gang.
    }
    return sum;                       
}, {});                               // Setter et tomt objekt som startverdi.


console.log('Her er en oversikt over hvor mange karakterer som har hvilke øyefarger: ' + JSON.stringify(charactersByEyeColor));


// Bruker JSON.stringify for å vise som et objekt og ikke som en streng.

// --------------------------------------------------------------------------------------


// Samler data om hvor mange tegn det blir i alle navnene til sammen med .reduce()


const totalLetterAmount = characters.reduce((total, character) => {
    return total + character.name.length;      // .length er viktig for å få antall bokstaver og ikke bare navnene ramsa opp.
},0);


console.log('Antall tegn i alle navnene til sammen er: ' + totalLetterAmount);





// Samler data om hvor mange som er male og female.


const charactersByGender = characters.reduce((sum, character) => {  // Lager en arrow-funksjon. Lagrer characters sin reduce i den. Tar imot 3 parametre.
    const gender = character.gender;      // Lagrer character.gender i en const for lettere bruk. 

    if(sum[gender]){      // Hvis den samla verdien allerede har en gender egenskap
        sum[gender]++;    // Så øk gender-egenskapen med 1.
    }
    else{                   
        sum[gender] = 1;  // Ellers så setter vi verdien til sum sin gender lik 1.
    }
    return sum;            // Returnerer sum. 
},{});           // Det tredje parameteret er her, det vil si '{}' som betyr at start verdien for den samla verdien er et tomt objekt.

console.log('Her er en oversikt over hvor mange av de forskjellige kjønnene det finnes i characters: ' + JSON.stringify(charactersByGender));

// Logger ut resulatet. 