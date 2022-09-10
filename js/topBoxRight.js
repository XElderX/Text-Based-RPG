const skillItems = document.getElementsByClassName('skillSpan');
let stats = {Hp: null, Def: null, Range: null, Sword: null, Strength: null, Energy: null};
const inventoryBox = document.getElementById('inventoryBox');
let items = {};

for (let index = 0; index < skillItems.length; index++) {
    let values = Object.values(stats);
    // console.log(values)
    skillItems[index].textContent = values[index];
    // console.log(values[index])
    
}
function updateInventory(){
    while (inventoryBox.firstChild) {
        inventoryBox.removeChild(inventoryBox.firstChild)
    }

    Object.entries(items).forEach(entry=> {
        const [itemKey, itemValue] = entry;
        const inventoryItem = document.createElement('div');
        const itemImage = document.createElement('img')
        const itemDescription = document.createElement('div')
        itemImage.src = `./images/items/${itemKey}.png`
        itemImage.style ='width:25px; '
        itemDescription.classList.add("itemInfo");
        itemDescription.innerHTML = `Item name: ${itemKey} <br> Item value: ${itemValue}`
        inventoryItem.appendChild(itemImage);
        inventoryItem.appendChild(itemDescription);
    

        // inventoryItem.innerHTML = `Item: ${itemKey} value is: ${itemValue} `
        // inventoryItem.style.fontFamily = 'Times New Roman';
    
       
        inventoryBox.insertBefore(inventoryItem, inventoryBox.firstChild);
    }) 
}


