const topBox = document.getElementById('topBox');
const mainContainer = document.getElementById('container');
const startContainer = document.getElementById('introContainer');


const introInput = document.querySelector('.introBottom');



const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const summaryElement = document.getElementById('summary');
const imageElement = document.getElementById('image');
const player = document.getElementById('playerName');



let state = {};
let stats = {Hp: null, Def: null, Range: null, Sword: null, Strength: null, Energy: null};;
let quote = '';
let playerName = '[name]'




function startApp(){
    topBox.classList.add("hideContainer")
    mainContainer.classList.add("hideContainer")

}
function submitInfo(){
    playerName = document.getElementById('pName').value;
    introInput.classList.add('hideContainer');
    const nameHeader = document.createElement('h3');
    const newContent = document.createTextNode(playerName);
    nameHeader.textContent = "Hello, ";
    nameHeader.appendChild(newContent);
    document.querySelector('.introTop').appendChild(nameHeader);
    console.log(playerName)
    //creating button to start startGame
    let playGame = document.createElement('button')
    playGame.type = "submit"
    playGame.onclick = function(){
        startGame();
    }
    // playGame.addEventListener('click', startGame());
    playGame.innerHTML= "Play"
    document.querySelector('.introTop').appendChild(playGame);
    // topBox.classList.remove("hideContainer")
    // mainContainer.classList.remove("hideContainer")
    // startContainer.classList.add("hideContainer")

    console.log(playerName);
}

function startGame() {
      topBox.classList.remove("hideContainer")
    mainContainer.classList.remove("hideContainer")
    startContainer.classList.add("hideContainer")
    state = {};
    stats = {Hp: 10, Def: 1, Range: 1, Sword: 1, Strength: 1, Energy:40};
    quote = '';
   
    summaryElement.style.display = 'none';
   
    console.log(playerName)
    player.innerHTML += playerName;
    showTextNode(1);

}

function showTextNode(textNodeIndex){
  
        const textNode = textNodes.find(textNode => textNode.id === 
            textNodeIndex);
            imageElement.src = textNode.image;
            (textNodeIndex == 2) 
            ? textElement.innerText = textNode.text.replace("[name]", playerName) 
            : textElement.innerText = textNode.text
            while (optionButtonsElement.firstChild) {
                optionButtonsElement.removeChild(optionButtonsElement.firstChild)
            }
            textNode.options.forEach(option => {
                if (showOption(option)) {
                    const button = document.createElement('button')
                    button.innerText = option.text
                    button.classList.add('btn-primary')
                    button.addEventListener('click', () => selectOption(option))
                    optionButtonsElement.appendChild(button)
                }
            })  
    

}
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
    const nextTextNodeId = option.nextText
   
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}
 

const textNodes = [
    { 
        id: 1, 
        text: 'You are young squire and visiting Sir\'s William castle. During your visit time you were taking to the room, where you will spent night and rest before tommorow\'s training sesion. You were very pleased to be here, and can\'t wait for tommorow.',
        image: 'images/1.jpg',
        options: [
            {
                text:'Continue',
                nextText: 2
            }
        ]
    },
    { 
        id: 2,
        text: 'Next morning you woke up just before sun rise. You spent some time thinking what will awaits you in today\'s training. Few hours later somebody\'s knockin your door and shouts: squire ' + playerName + ' knight Rolph the Gracious will be waiting for you after launch at the Rose n Wine Tavern. Now come for the your royal launch to refill you energy before long training sesion',
        options: [
            {
                text: 'Of course sir. I dress up and went straight for launch. (I\'m so motivated!) ',
                nextText: 3

            },
            {
                text: 'Well actually I am not hungry. So I pass today\'s launch',
                nextText: 4

            },
            {
                text: 'Ok, if you say so...',
                nextText: 3

            },
            {
                text: 'Well actually I need more sleep.',
                nextText: 3

            }
        ]
    }

]


startApp()