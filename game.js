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
    if (!textNodeIndex <= 0) {
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

}
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0 ){
        // console.log(state)
        if (nextTextNodeId != 0) {   
            return startGame() } 
        stateSummary();
        // return startGame();
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

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
    },
    { 
        id: 3,
        text: 'You stabbed deadly blow to your victim, who was just little miserable goblin from distant village',
        options: [
            {
                text: 'Hide his weak body in the barrel',
                setState: { body_in_barrel: true },
                
                nextText: 5
            },
            {
            
                text: 'leave his body on the floor as it is',
                setState: { body_on_doorsteps: true },
                
                nextText: 5

            }
        ]
    },
    { 
        id: 4,
        text: 'After you open the door. A sad misserable goblin asked some bread and water',
        options: [
            {
                text: 'Give Some bread chunk from closet and some water from jug',
                setState: { good : true },
                
                nextText: 5
            },
            {
            
                text: 'Shoo it away. Saying begone you dirty peace of shit',
                setState: { evil: true },
                
                nextText: 5

            }
        ]
    },
    { 
        id: 5,
        text: 'Some time latter you went to town centre and old cunt offered your some gold for far away',
        options: [
            {
                text: 'Offer rusty dagger for it',
                requiredState: (currentState) => currentState.rusty_dagger,
                setState: { rusty_dagger: false, muslim_gold: true },
                nextText: 7
          
            },
            {
            
                text: 'offer blooded dagger',
                requiredState: (currentState) => currentState.bloody_rusty_dagger,
                setState: { bloody_rusty_dagger: false, muslim_gold: true },
                
                nextText: 6

            },
            {
            
                text: 'begone you peace of shit',
              
                nextText: 7

            }
        ]
    },
    { 
        id: 6,
        text: 'Whahaao its covered in blood!! What happened??',
        options: [
            {
                text: 'Its fucking meaningless goblin come to rob me',
                
                setState: { suspicious: true},
                nextText: 7
          
            },
            {
            
                text: '(lie) I just butchered some boar meat for food',
              
                setState: { lied:true },
                
                nextText: 7

            },
            {
            
                text: 'Piss off ',
                setState: { suspicious:true },
              
                nextText: 7

            }
        ]
    },
    { 
        id: 7,

        text: 'letter in evening you back to home. Few moments latter you relize it some folks commin for you.',
        
        options: [
            {
                text: 'I was arrested ',
                requiredState: (currentState) => currentState.lied,
                nextText: 10
       
          
            },
            {
            
                text: 'damn I was arrested' ,
                requiredState: (currentState) => currentState.suspicious ,
        
                
                nextText: 10

            },
            {
            
                text: 'fuck that body ',
                requiredState: (currentState) => currentState.body_on_doorsteps ,
               
                nextText: 10

            },
            {
            
                text: 'They just pass by ',
                
               
            

            }
        ]
    },
    { 
        id: 10,

        text: 'hahaha you bastard',
        
        options: [
            {
                text: 'game over ',
                
                nextText: 0
       
          
            }
           
        ]
    },
    { 
        id: 100,

        text: 'Restart the game?',
        
        options: [
            {
                text: 'yes ',
                
                nextText: -1
       
          
            }
           
        ]
    }
    
    

]


startApp()