
const topBox = document.getElementById('topBox');
const mainContainer = document.getElementById('container');
const startContainer = document.getElementById('introContainer');
const summaryElement = document.getElementById('summary');
const notificationsContainer = document.getElementById('notifications');
const stateList = document.getElementById('stateList');

const player = document.getElementById('playerName');


let state = {};

let activeState = [];
let quote = '';
let playerName = '[name]'

function startApp(){
    topBox.classList.add("hideContainer")
    mainContainer.classList.add("hideContainer")

}
function startGame() {
    topBox.classList.remove("hideContainer")
    mainContainer.classList.remove("hideContainer")
    startContainer.classList.add("hideContainer")

    state = {};
    stats = { Hp: 10, Def: 1, Range: 1, Sword: 1, Strength: 1, Energy: 40};
    quote = '';
   
    summaryElement.style.display = 'none';
   
    // console.log(playerName)
    player.innerHTML += playerName;
    showTextNode(1);

}

function stateSummary(){
   

    for (const stat in state) {
    //    console.log(stat)
       quote += stat;
       quote += ' ';

    }
    console.log(quote)
    summaryElement.style.display = 'block';
    // textElement.style.display = 'none';
    summaryElement.innerHTML = quote;
    showTextNode(100);

}
startApp()
