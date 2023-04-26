/*
Denne oppgaven løser du med: Funksjoner, Parameter, Onclick og evt setTimeout().

I denne oppgaven skal du lage et trafikklys som bytter fra rødt - til rødt og gult og så til grønt ved hjelp av knapper som bytter hvilke sirkler som har farge - og hvilke farge den har.

1. Lag tre sirkler under hverandre, som skal kunne ha en bakgrunnsfarge. Det øverste kan bli rødt, det i midten kan bli gult/oransje og det nederste grønt.

2. Lag 3 knapper - en før rødt lys, en for rødt og gult og en for grønt lys.

3. Bruk funksjon med parameter, CSS klasser og onclick for å få knappene til å endre lysene.

4. Når du har fått til dette kan du utfordre deg selv og forsøke å finne ut hvordan man kan automatisere trafikklyset ved hjelp av setTimeout()
*/



// Model

let html;
let greenActiveTimer;

// View

updateView();
function updateView() {
    html = /*html*/ `
    <div id="trafikklys">
        <div id="rød" class="rød sirkel"></div>
        <div id="orange" class="orange sirkel"></div>
        <div id="grønn" class="grønn sirkel"></div>
    </div>

    <button onclick="greenReaction()" id="greenReact">Trykk når lyset er grønt for å se reaksjonstiden din</button>
    <p id="resultText"></p>
    `;
    document.getElementById('app').innerHTML = html;
}

// Controller

let red = document.getElementById('rød');
let yellow = document.getElementById('orange');
let green = document.getElementById('grønn');
let previousColorGreen;
let greenButtonActive = true;


function lightTimer() {
    setTimeout(activeRed, 1000);
}

function activeGreen() {
    greenActiveTimer = Date.now();
    lightOpacity(1, 0.1, 0.1);
    previousColorGreen = true;
    setTimeout(activeYellow, 2000);
    activateGreenButton();
}

function activeYellow() {
    //gult skal fortsette å lyse litt
    lightOpacity(0.1, 1, 0.1);
    if (previousColorGreen) {
        setTimeout(activeRed, 2000);
    }
    else { //previousColorGreen = false
        setTimeout(lightOpacity(0.1, 1, 1), 500);
        setTimeout(activeGreen, 1000);
    }
    deactivateGreenButton();
}

function activeRed() {
    lightOpacity(0.1, 0.1, 1);
    previousColorGreen = false;
    setTimeout(activeYellow, 1000);
    deactivateGreenButton();
}

function lightOpacity(greenOpacity, yellowOpacity, redOpacity) {
    red.style.opacity = redOpacity;
    yellow.style.opacity = yellowOpacity;
    green.style.opacity = greenOpacity;
}



function greenReaction() {
    if(!greenButtonActive) return;

    let clickedTime = Date.now();
    let resultEl = document.getElementById("resultText");
    let timeTaken = (clickedTime - greenActiveTimer) / 1000; //dele på tusen for å få sekunder

    resultEl.innerText = 'Du brukte ' + timeTaken + ' sekunder';
}


function activateGreenButton() {
    greenButtonActive = true;
}    


function deactivateGreenButton() {
    greenButtonActive = false;
  }
  