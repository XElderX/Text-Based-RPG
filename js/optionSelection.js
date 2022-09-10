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
    conditionChanges(option);
 
    showTextNode(nextTextNodeId)

};