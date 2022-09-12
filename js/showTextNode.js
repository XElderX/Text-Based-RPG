
function showTextNode(textNodeIndex){
    // console.log(stats)
    // console.log(state)
    //for showin stats values
    for (let index = 0; index < skillItems.length; index++) {
        let values = Object.values(stats);
        // console.log(values)
        skillItems[index].textContent = values[index];
        // console.log(values[index])
        
    }
   
    if (!textNodeIndex <= 0) {
        const textNode = textNodes.find(textNode => textNode.id === 
            textNodeIndex);
            (textNode.image) 
            ? imageElement.src = textNode.image 
            : imageElement.src = 'https://place-hold.it/500x300';

            (textNodeIndex == 2 ) 
            ? textElement.innerText = textNode.text.replace("[name]", playerName) 
            : textElement.innerText = textNode.text
            while (optionButtonsElement.firstChild) {
                optionButtonsElement.removeChild(optionButtonsElement.firstChild)
            }
            textNode.options.forEach(option => {
                if (showOption(option)) {
                    const button = document.createElement('button')
                    let variable;
                    (textNodeIndex == 4 ) 
                    ? button.innerText = option.text.replace("[name]", playerName)
                    : button.innerText = option.text
                    
                    button.classList.add('btn')
                    button.addEventListener('click', () => selectOption(option))
                    optionButtonsElement.appendChild(button)
                }
            })  
    }

}