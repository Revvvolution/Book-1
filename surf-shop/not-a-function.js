const { inventory } = require("./data.js")



const isBargain = (inventoryItem) => {
    let returnValue = false

    if (inventoryItem.price < 50.00) {
        returnValue = true
    }

    return returnValue
}

const isClothing = (item) => {
    let returnValue = false

    if (item.type === "clothing") {
        returnValue = true
    }

    return returnValue
}

const isSurfboard = (item) => {
    let returnValue = false

    if (item.type === "surfboard") {
        returnValue = true
    }

    return returnValue
}

const isGear = (gear) => {
    let returnValue = false

    if (gear.type === "gear") {
        returnValue = true
    }

    return returnValue
}


for (let surfProduct of inventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }


    if (isSurfboard(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (message !== "") {
        console.log(message)
    }
}

console.log("\n------------------------\n")


    // moved this arrow function down here, added a for loop inside and edited the definitions of the constants (changing them all to *let*, but not sure if that matters)
const convertDataForAccounting = (product) => {
    for (let upperInfo of product) {
        let upperDescription = upperInfo.description
        let upperPrice = upperInfo.price
        let upperType = upperInfo.type
        let forAccounting = (`${upperDescription} - ${upperType} - ${upperPrice}`)  // initially had this as return, but forgot that it stops the loop...assigned the string to a variable
        console.log(forAccounting.toUpperCase())
    }
}

const modifiedData = convertDataForAccounting(inventory)
modifiedData                        // originally console logged the return in the loop, but it only printed the first instance
                                    // capitalization worked, though! So, I put the console log in loop and now just calling on the function (THIS DIDN'T WORK, so I put the string in a variable before console logging it with uppercase)



