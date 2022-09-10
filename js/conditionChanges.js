let eventCount = 0;
function conditionChanges(option){
    // state = Object.assign(state, option.setState)
//-------
// console.log(stats)
    checkStats = Object.entries(stats)
    
    // console.log('>>' + checkStats)

    addition = option.setStats
    let skillKey = null;
    let skillValue = null;
    let newStatValue = null;
    let newStatArr=[];
    let updateStats={};


    let stateKey = null;
    let stateValue = null;
    let newStateValue = null;
    let newStateArr = [];
    let updateState = {};


    eventCount++;


if(option.setState){ 
    if(Object.keys(state).length === 0){
        updateState =  Object.assign(updateState, option.setState);
    }else{
        Object.entries(option.setState).forEach(entry=> {
            const [state_key, value] = entry;
            stateKey = state_key;
            stateValue = value;
       
                 if (typeof stateValue !== 'boolean') {
                    
                     Object.entries(state).forEach(entry=> {
                         const [currState, currStateValue] = entry;
                         
                         if (currState === stateKey) {
                             newStateValue = currStateValue + stateValue
                             
                                 newStateArr = ({ [stateKey] : newStateValue})
                                 updateState = Object.assign(updateState, newStateArr);
                             
                             }  else{
                                 newStateArr = ({ [stateKey] : value})
                                 updateState = Object.assign(updateState, newStateArr);
                             }   
                         }) 
                 }
                   }
                     )  
                      }
                     }


if(option.setStats){
    Object.entries(addition).forEach(entry=> {
        const [k, v] = entry;
        skillKey = k;
        skillValue = v;
        const turnChanges = document.createElement('div');
       
        (v >= 0) ? statusType = 'increased' : statusType = 'decresed';
        (v >= 0) ? turnChanges.style.color = 'green' : turnChanges.style.color = 'red';
        turnChanges.innerHTML = `Turn ${eventCount}: Due your decision your <span>${k}</span> stat ${statusType} by ${v} `
        notificationsContainer.insertBefore(turnChanges, notificationsContainer.firstChild);

        // console.log('>>' + k, v);
        // console.log('>>' + skillKey + ' ' + skillValue);
        Object.entries(stats).forEach(entry=> {
            const [sk, sv] = entry;
            // console.log('>>>' + sk, sv)
            if (sk === skillKey) {
                newStatValue = skillValue + sv
                    newStatArr = ({ [skillKey] : newStatValue})
                    updateStats = Object.assign(updateStats, newStatArr);
                
                }    
            })    
        })    
    }
    // console.log('updating stats:<|<<')
    // console.log(updateStats)
    // console.log('updating state<<<<:')
    // console.log(updateState)

    state = Object.assign(state, updateState)
    // console.log('~~~~~~')
    // console.log(state)
    // console.log('~~~~~~')
    stats = Object.assign(stats, updateStats)

    items = Object.assign(items, option.setItem)
    console.log(items);
    updateInventory()
    devConsole();

    

    //For debug------
    
    // console.log('||' + newStatValue)
    // console.log('----')
    // console.log(updateStats)
    // console.log('----')
    // console.log(option.setStats)
//ForDebug----------




}


