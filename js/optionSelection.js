function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
    if (option.callEvent) {
        const fireEvent = option.callEvent
        
        combatEvent(fireEvent)

        
    }
    if (option.nextText) {
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0 ){
            // console.log(state)
            if (nextTextNodeId != 0) {   
                return location.reload();} 
            stateSummary();
            // return startGame();
        }
        
        conditionChanges(option);
        showTextNode(nextTextNodeId)
    }
    
};