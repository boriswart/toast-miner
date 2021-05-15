
let toastVault = 0
let collectedToast = 0
let numToastPerClick = 1;
let toastVaultElem = document.getElementById("toast-vault")
let collectedToastElem = document.getElementById("collected-toast")
let productionUpgrades = [{
    name: "10 Kw Toaster",
    desc: "2 toastes per click",
    cost: 100,
    img: "assets/img/toaster.png",
    func: "upgradeNumToast",
    passive: false,
    enabled: false
},
{
    name: "Flame Thrower",
    desc: "5 toasts per click",
    cost: 500,
    img: "assets/img/flamer.gif",
    func: "upgradeFlameToast",
    passive: false,
    enabled: false
},
{
    name: "Robot Toaster",
    desc: "5 toasts per period",
    cost: 1000,
    img: "assets/img/gears-robit.gif",
    func: "upgradeRobotToast",
    passive: true,
    enabled: false
},
{
    name: "2nd Robot Toaster",
    desc: "period reduced to 3s",
    cost: 2000,
    img: "assets/img/speed-upgrade.gif",
    func: "upgradeIncRobotToast",
    passive: true,
    enabled: false
}]

function pickToast() {
    console.log("you have picked Toast!")
    collectedToast += numToastPerClick
    toastVault += numToastPerClick
    drawScreen()
}

function drawScreen() {
    collectedToastElem.innerText = `Toast Collected: ${collectedToast.toString()}`
    toastVaultElem.innerText = `Toast Vault: ${toastVault.toString()}`
    drawUpgrades('left', 3, 0)  //draws left side starting from 0 to 3 of productionUpgrades
    drawUpgrades('right', 6, 3) //draws right side starting from 3 to 6 of productionUpgrades
}

function drawUpgrades(side, count, starting) {
    let upgradeElem = document.getElementById(`upgrade-space-${side}`)
    let template = []

    for (let x = starting; x < starting + count; x++) {
        // @ts-ignore
        template = + `
        <div class="col-4" onclick="${productionUpgrades[x].func}()>
            <img class="img-fluid" src="${productionUpgrades[x].img}"
                alt="..." width="100">
        </div>
        <div class="col-8  my-auto">
            <div>
                <p class="no-margin"> ${productionUpgrades[x].name}</p>
                <p class="no-margin"> ${productionUpgrades[x].desc}</p>
                <p class="no-margin"> ${productionUpgrades[x].cost}</p>
            </div>
        </div>  
        `
    }
    // @ts-ignore
    upgradeElem.innerHTML = template
}

function updateNumToast() {
    if (numToastPerClick < 2) numToastPerClick = 2
    //TODO    disable future numToastPerClick 
    console.log("numToastPerClick updated to two!", numToastPerClick)
}

//drawScreen()