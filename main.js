
let toastVault = 0
let collectedToast = 0
let numToastPerClick = 1;
let toastVaultElem = document.getElementById("toast-vault")
let collectedToastElem = document.getElementById("collected-toast")

function pickToast() {
    console.log("you have picked Toast!")
    collectedToast += numToastPerClick
    toastVault += numToastPerClick
    drawScreen()
}

function drawScreen() {
    collectedToastElem.innerText = `Toast Collected: ${collectedToast.toString()}`
    toastVaultElem.innerText = `Toast Vault: ${toastVault.toString()}`
}

function updateNumToast() {
    if (numToastPerClick < 2) numToastPerClick = 2
    //TODO    disable future numToastPerClick 
    console.log("numToastPerClick updated to two!", numToastPerClick)
}


drawScreen()