
let toastVault = 0
let collectedToast = 0
let numToastPerClick = 1;
let toastVaultElem = document.getElementById("toast-vault")
let collectedToastElem = document.getElementById("collected-toast")
let productionUpgrades = [{
    name: "10 Kw Toaster",
    desc: "2 toastes per click",
    cost: 100,
    img: "assets/img/5k-toaster.png",
    func: "upgradeNumToast",
    passive: false,
    enabled: false
},
{
    name: "Flame Thrower",
    desc: "5 toasts per click",
    cost: 500,
    img: "assets/img/flame-throw-small.png",
    func: "upgradeFlameToast",
    passive: false,
    enabled: false
},
{
    name: "Robot Toaster",
    desc: "5 toasts per period",
    cost: 1000,
    img: "assets/img/robot-toaster.png",
    func: "upgradeRobotToast",
    passive: true,
    enabled: false
},
{
    name: "2nd Robot Toaster",
    desc: "period reduced to 3s",
    cost: 2000,
    img: "assets/img/robot-toaster2.png",
    func: "upgradeIncRobotToast",
    passive: true,
    enabled: false
},
{
    name: "3rd Robot Toaster",
    desc: "period reduced to 3s",
    cost: 2000,
    img: "assets/img/robot-toaster3.png",
    func: "upgradeIncRobotToast",
    passive: true,
    enabled: false
},
{
    name: "4th Robot Toaster",
    desc: "period to to 3s",
    cost: 2000,
    img: "assets/img/robot-toaster4.png",
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
    drawUpgrades("left", 3, 0)  //draws left side starting from 0 to 3 of productionUpgrades
    drawUpgrades("right", 3, 3)  //draws right side starting from 3 to 6 of productionUpgrades
}

function drawUpgrades(side, count, starting) {
    let upgradeElem = document.getElementById(`upgrade-space-${side}`)
    let template = ""

    for (let x = starting; x < starting + count; x++) {
        template += `
        <div class="row no-gutters text-dark  border-info rounded bg-light my-3">
            <div class="col-4" onclick="${productionUpgrades[x].func}()">
                <img class="img-fluid" src="${productionUpgrades[x].img}"
                    alt="..." width="100">
            </div>
            <div class="col-8  my-auto">
                <div>
                    <p class="no-margin"> ${productionUpgrades[x].name}</p>
                    <p class="no-margin"> ${productionUpgrades[x].desc}</p>
                    <p class="no-margin"> cost: ${productionUpgrades[x].cost}</p>
                </div>
            </div>
        </div>
        `
    }
    upgradeElem.innerHTML = template
}

function upgradeNumToast() {
    if (numToastPerClick < 2) numToastPerClick = 2
    //TODO    disable future numToastPerClick 
    console.log("numToastPerClick updated to two!", numToastPerClick)
}
drawScreen()