

// Model

let html;

let answers = ["It is certain.", 
"It is decidedly so.", 
"Without a doubt", 
"Yes definitely.", 
"You may rely on it.", 
"As I see it, yes.", 
"Most Likely.", 
"Outlook good.", 
"Yes.", 
"Signs point to yes.", 
"Reply hazy, try again.", 
"Ask again later.", 
"Better not tell you now.", 
"Cannot predict now.", 
"Concentrate and ask again.", 
"Don't count on it.", 
"My reply is no.", 
"My sources say no.", 
"Outlook not so good.", 
"Very doubtful."];

let randomAnswer = '';
let previousRndNum;

// View

updateView();
function updateView() {
    html = /*HTML*/ `
        <input id="questionInput" onchange="giveAnswer(this.value)">
        <div>${randomAnswer}</div>
    `;
    document.getElementById('app').innerHTML = html;
}


// Controller


function giveAnswer(inputString) {
    if (!checkIfQuestion(inputString)) {
        alert("Please end your question with a '?'");
        return;
    }

    let rndNum = Math.floor(Math.random() * 20);
    if(previousRndNum == rndNum) rndNum++;
    randomAnswer = answers[rndNum];
    previousRndNum = rndNum;
    updateView();
}


function checkIfQuestion(inputString) {
    if (inputString.includes('?')) return true;
    return false;
}