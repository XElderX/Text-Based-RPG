const introInput = document.querySelector('.introBottom');
function blinkIt() {
    var blinks = document.getElementsByTagName("p");
    for(var i = 0, l = blinks.length; i < l; i++){
      var blink = blinks[i];
      var visiblity = blink.style.visibility;
      blink.style.visibility = visiblity == 'visible' ? 'hidden' : 'visible';
     }
   }
  
  setInterval(blinkIt, 500 /* blinking interval in ms */);


function submitInfo(){
    
    playerName = document.getElementById('pName').value;
    if (playerName ==='' || playerName.length < 3) {
        const denied = document.querySelector('.introBottom')
        const note = document.createElement('h3')

        if (document.querySelector(".introBottom h3")) {
            const noteElement = document.querySelector('.introBottom h3')
            denied.removeChild(noteElement)
          } 
        
      

        note.textContent = 'Your squire name is not valid. Make sure it longer than 3 letter';
        note.style = 'color:#fd0e35'
        return denied.appendChild(note);

        
    }
    introInput.classList.add('hideContainer');
    const nameHeader = document.createElement('h3');
    const player = document.createTextNode(playerName);
    const underContent = document.createElement('p');
    nameHeader.textContent = "Hello, ";
    nameHeader.appendChild(player);
    underContent.innerHTML = "Press <span style='color:red'>play</span>, to start new game"
    document.querySelector('.introTop').appendChild(nameHeader);
    document.querySelector('.introTop').appendChild(underContent);
    // console.log(playerName)
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

    // console.log(playerName);
}