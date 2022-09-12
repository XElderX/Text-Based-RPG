

const weapons = [
    {
        weapon_ID: 1,
        weaponName: 'Bare Hands',
        weaponType: 'Sword',
        weaponStats: 1
    }

]

let opponent = {};
let playerStats = {};

function combatPrint(input) {
    const outputBox = document.getElementById('combatOutput')
    const outputLine = document.createElement('div')
    outputLine.classList.add('eventAction')
    outputLine.innerHTML = "<span class='lineStartEnd'>Action:</span> " + input + " <span class='lineStartEnd> end turn</span>"
    console.log(outputBox)
    outputBox.appendChild(outputLine)
}



function combatEvent(eventID) {
    console.log(eventID);
    combatElementsSetup()
    opponent = enemyNpc(eventID);
    playerStats = getPlayerStats()
    playerStats.weapon = equipWeapon(1)
    duelClash(opponent, playerStats)

    console.log(opponent)
    console.log(playerStats)

}

function combatElementsSetup() {
    textElement.classList.add('hideContainer')
    optionButtonsElement.classList.add('hideContainer')
    const imageBox = document.querySelector('.imageBox')
    imageElement.classList.add('hideContainer')
    const combatElement = document.createElement('div')
    combatElement.setAttribute('id', 'combatElement')

    const combatBtnElement = document.createElement('button')
    combatBtnElement.type = "submit"
    combatBtnElement.setAttribute('id', 'attack')
    combatBtnElement.addEventListener("click", playerTurn, false);
    combatBtnElement.textContent = "Next Step";



    const combatOutputText = document.createElement('div')
    combatOutputText.setAttribute('id', 'combatOutput');
    combatElement.innerHTML = '<h2>Combat</h2>'
    combatElement.append(combatBtnElement, combatOutputText)
    imageBox.appendChild(combatElement)

}

function enemyNpc(id) {
    const enemy = npcs.find(npc => npc.event_id ===
        id);

    return enemy;
}
function getPlayerStats() {
    return stats;

}
function equipWeapon(weaponID) {
    return weapons.find(weapon => weapon.weapon_ID === weaponID);
}
function duelClash(npc, player) {



    combatPrint('The duel between <span class= \'markedObject\' >' + playerName + ' </span> and <span class= \'markedObject\' >' + npc.name + ' </span> has been started')


    if (npc.firstAttack == false) {
        playerTurn()
    } else {
        enemyTurn()
    }

}

function playerTurn() {
    document.getElementById("attack").disabled = true;
    playerStats.Energy = playerStats.Energy - 5
    let maxDamage = playerStats.Strength + playerStats.Sword + playerStats.weapon.weaponStats
    let damage = Math.floor(calcDamage(maxDamage, 0))
    opponent.health = opponent.health - damage
    let hp_left = opponent.health
    if (hp_left < 0) {
        hp_left = 0
    }
    output = 'With your <span class= \'markedObject\' >' + playerStats.weapon.weaponName + '</span> you hit with <span>' + damage + ' HP </span> damage to <span class= \'markedObject\' >' + opponent.name + '</span> Enemy has <span>' + opponent.health + ' HP </span> left'
    combatPrint(output)
    console.log(output)
    console.log(maxDamage)
    console.log('>damaged <<' + damage)
    console.log(playerStats)
    console.log(opponent)
    checkHP(playerStats.Hp, opponent.health)
    enemyTurn()




}
function enemyTurn() {
    console.log('enemyTurn')
    document.getElementById("attack").disabled = false;
    let move = calcEnemyMove(opponent.moveNum)
    enemyDamage = Math.floor(calcDamage(opponent.moves[move][1], 1));
    let finalDamage = (enemyDamage - (playerStats.Def * 2))
    if (finalDamage < 0) {
        finalDamage = finalDamage * (-1)
    }
    playerStats.Hp = playerStats.Hp - finalDamage
    let hp_left = playerStats.Hp
    if (hp_left < 0) {
        hp_left = 0
    }
    console.log(enemyDamage)
    output = 'Your enemy <span class= \'markedObject\'>' + opponent.name + '</span> Hit you with his <span class= \'markedObject\' >' + opponent.moves[move][0] + ' </span> attack. Dealing  total of <span class= \'markedObject\' >'
        + finalDamage + '</span> damage. Due your defence skill it was reduced by <span>'
        + (enemyDamage - finalDamage) + ' points </span> of that damage. You have <span>' + hp_left
        + ' HP </span> left'
    combatPrint(output)
    checkHP(playerStats.Hp, opponent.health)



}
function calcDamage(max, min) {
    return Math.random() * (max - min) + min;
}

function calcEnemyMove(int) {
    var movesCount = int;
    console.log(movesCount)
    return Math.floor(calcDamage(movesCount + 1, 1)) - 1;
}

function checkHP(player_hp, enemy_hp) {
    if (player_hp <= 0) {
        output = 'Oh no! you are dead... You have been kiled by <span class= \'markedObject\'>' + opponent.name + ' </span>'
        combatPrint(output);
        return duelLost();
    } else if (enemy_hp <= 0) {
        output = "You've defeated the <span class= \'markedObject\'> " + opponent.name + " </span>."
        combatPrint(output);

        return duelWon();
    }
    return false;
}

function duelLost() {
    textElement.classList.remove('hideContainer')
    optionButtonsElement.classList.remove('hideContainer')
    imageElement.classList.remove('hideContainer')

    document.getElementById('combatElement').parentNode.removeChild(document.getElementById('combatElement'));

    //     // Get the child element node
    // var child = document.getElementById("child")

    // // Remove the child element from the document
    // child.parentNode.removeChild(child);

}
function duelWon() {
    textElement.classList.remove('hideContainer')
    optionButtonsElement.classList.remove('hideContainer')
    imageElement.classList.remove('hideContainer')

    document.getElementById('combatElement').parentNode.removeChild(document.getElementById('combatElement'));


}


