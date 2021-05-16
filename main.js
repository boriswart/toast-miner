
let toastVault = 0
let collectedToast = 0
let numToastPerClick = 1;
let toastVaultElem = document.getElementById("toast-vault")
let collectedToastElem = document.getElementById("collected-toast")
let productionUpgrades = [{

    key: "10Kwtoaster",
    name: "10 Kw Toaster",
    desc: "2 toastes per click",
    cost: 10,
    img: "assets/img/5k-toaster.png",
    imgMod: "assets/img/5k-toaster-mod.png",
    func: "respondEvntUpgrade",
    passive: false,
    enabled: false
},
{

    key: "flamethrower",
    name: "Flame Thrower",
    desc: "5 toasts per click",
    cost: 10,
    img: "assets/img/flame-throw-small.png",
    imgMod: "assets/img/flame-throw-mod.png",
    func: "respondEvntUpgrade",
    passive: false,
    enabled: false
},
{
    key: "robottoaster",
    name: "Robot Toaster",
    desc: "5 toasts per period",
    cost: 10,
    img: "assets/img/robot-toaster.png",
    imgMod: "assets/img/robot-toaster-mod.png",
    func: "respondEvntUpgrade",
    passive: true,
    enabled: false
},
{

    key: "2ndrobottoaster",
    name: "2nd Robot Toaster",
    desc: "period reduced to 3s",
    cost: 20,
    img: "assets/img/robot-toaster2.png",
    imgMod: "assets/img/robot-toaster2-mod.png",
    func: "respondEvntUpgrade",
    passive: true,
    enabled: false
},
{
    key: "3rdrobottoaster",
    name: "3rd Robot Toaster",
    desc: "period reduced to 3s",
    cost: 20,
    img: "assets/img/robot-toaster3.png",
    imgMod: "assets/img/robot-toaster3-mod.png",
    func: "respondEvntUpgrade",
    passive: true,
    enabled: false
},
{
    key: "4throbottoaster",
    name: "4th Robot Toaster",
    desc: "period to to 3s",
    cost: 20,
    img: "assets/img/robot-toaster4.png",
    imgMod: "assets/img/robot-toaster4-mod.png",
    func: "respondEvntUpgrade",
    passive: true,
    enabled: false
}]

function pickToast() {
    console.log("you have picked Toast!")
    collectedToast += numToastPerClick
    toastVault += numToastPerClick
    drawScreen()
}

let mods = []


function respondEvntUpgrade(key) {
    let productionKey = productionUpgrades.find(x => x.key == key)
    console.log("upgrade key", productionKey)
    if (toastVault >= productionKey.cost) {
        toastVault -= productionKey.cost
        pushMods(productionKey)
        drawScreen()
        productionKey.cost = productionKey.cost * 10;
        drawUpgrades("left", 3, 0)
        if (productionKey.key == "10Kwtoaster") {
            upgradeNumToast(2)
        } else if (productionKey.key == "flamethrower") {
            upgradeNumToast(5)
        }



    } else {
        alert("You do not have enough Toast!")
    }

}

function pushMods(modName) {
    let mod = productionUpgrades.find(x => x.key == modName.key)
    console.log(mod)
    mods.push(mod)
    console.log("mods after push: ", mods)
    drawMods()

}

function drawMods() {
    let modDispElem = document.getElementById("mod-display-area")
    let template = ""
    if (mods != []) {
        console.log("mods during drawMods()", mods.length, mods)
        for (let x = 0; x < mods.length; x++) {
            template += /*html*/`
                "<!--    Earned Mod #"${x + 1}"   -->""
                <div class="col-4 container-bg-highlight text-light">
                    <img class="img-fluid" src="${mods[x].imgMod}" alt="..." width="100">
                    <div class="col-12  my-auto ">
                        <div class="">
                            <p class="no-margin">${mods[x].name}</p>
                        </div>
                    </div>
                </div>
            `
        }
        modDispElem.innerHTML = template
    } else modDispElem.innerHTML = `<!--    Mods Are Empty   -->`
}


function drawUpgrades(side, count, starting) {
    let upgradeElem = document.getElementById(`upgrade-space-${side}`)
    let template = ""

    for (let x = starting; x < starting + count; x++) {
        template += `
        <div class="row no-gutters text-dark  border-info rounded bg-light my-3">
        <div class="col-4" onclick="${productionUpgrades[x].func}('${productionUpgrades[x].key}')">
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
    if (template != "") {
        upgradeElem.innerHTML = template
    } else {
        upgradeElem.innerHTML = "<!-- template is empty  -->"
    }
}

function drawScreen() {
    collectedToastElem.innerText = `Toast Collected: ${collectedToast.toString()}`
    toastVaultElem.innerText = `Toast Vault: ${toastVault.toString()}`
    //drawUpgrades("left", 3, 0)  //draws left side starting from 0 to 3 of productionUpgrades
    //drawUpgrades("right", 3, 3)  //draws right side starting from 3 to 6 of productionUpgrades
}
function upgradeNumToast(quantity) {
    numToastPerClick = quantity
    //TODO    disable future numToastPerClick 
    console.log("numToastPerClick updated to two!", numToastPerClick)
}
drawScreen()
drawUpgrades("left", 3, 0)  //draws left side starting from 0 to 3 of productionUpgrades
drawUpgrades("right", 3, 3)  //draws right side starting from 3 to 6 of productionUpgrades
drawMods()