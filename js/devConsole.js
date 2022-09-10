let toggled = false;

function showDev(){
    const toggleDevConsole = document.getElementById('devConsole');
    const toggleOn = document.getElementById('devBtn');
    toggled = !toggled;
    // console.log(toggled);

    toggleDevConsole.classList.toggle("showFlexContainer");
    (toggled === true) ? toggleOn.textContent = "Turn Dev Console Off" : toggleOn.textContent = "Dev Console on";

}

function devConsole(){
    while (stateList.firstChild) {
        stateList.removeChild(stateList.firstChild)
    }
    console.log('>>>devConsole<<<<')
    console.log(state)
    Object.entries(state).forEach(entry=> {
        const [key, value] = entry;
        const list = document.createElement('li');
        list.innerHTML = `<span style="color:rgb(18,53,36);">${key}</span> state is: ${value} `
        list.style.fontFamily = 'Times New Roman';

       
        stateList.insertBefore(list, stateList.firstChild);
    }) 


    // for (const stat in state) {
    //     //    console.log(stat)
    //        quote += stat;
    //        quote += ' ';
    
    //     }


    // const list = document.createElement('li');
    // (value >= 0) ? list.style.color = 'green' : list.style.color = 'red';
    // list.innerHTML = `Turn ${eventCount}: Due your decision your <span>${state}</span> stat changed by ${value} `
    // stateList.insertBefore(list, stateList.firstChild);
}