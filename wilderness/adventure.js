// importing arrays for function execution
const { trails, rivers, wildlife } = require("./data.js")

// importing functions for executable calls to them from main file here
const {
    totalTrailMiles, shortestTrail, longTrail,
    cheapestTrail, expensiveTrail, cheapRiverTour,
    expensiveRiverTour, trailDetails, riverDetails
} = require("./functions.js")



console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)

    // Listing the total, shortest, and longest trails within the array
console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} kilometers of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)


console.log("")

    // Listing the least and most expensive trails by price beginning with 1 '$' and price >= 4 '$$$$'
console.log("The least expensive trails are:")
const cheapTrail = cheapestTrail(trails)

console.log("")

console.log("The most expensive trails are:")
const costlyTrail = expensiveTrail(trails)


console.log("")

    // Listing extensive trail details
console.log("TRAIL DETAILS:")
console.log("---------------------------------")

const trailDeets = trailDetails(trails)


console.log("\n\n")


    // Listing the total, shortest, and longest rivers within the array
console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')
const riverTotal = totalTrailMiles(rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortRiver = shortestTrail(rivers)
console.log(`The shortest river tour is ${shortRiver} kilometers`)

const longestRiver = longTrail(rivers)
console.log(`The longest river tour is ${longestRiver} kilometers`)


console.log("")

    // Listing the least and most expensive river tours by price beginning with 1 '$' and price >= 4 '$$$$'
console.log("The least expensive river tours are:")
const cheapestRiver = cheapRiverTour(rivers)

console.log("")

console.log("The most expensive river tours are:")
const costlyRiverTour = expensiveRiverTour(rivers)


console.log("")

    // Listing extensive trail details
console.log("RIVER DETAILS:")
console.log("---------------------------------")

const riverDeets = riverDetails(rivers)


console.log("\n\n")


