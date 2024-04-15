                    /* All Internal Functions to Export (for main call file adventure.js)  */


// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return total
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortest = 10000
    for (const trail of trailArray) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

// Get the cheapest trails printed as a tabbed list
const cheapestTrail = (trailArray) => {
    for (const trail of trailArray) {
        if(trail.price === "$") {
           console.log(`\t${trail.trailName}`)
        }
    }
}

// Get the expensive trails printed as a tabbed list
const expensiveTrail = (trailArray) => {
    for (const trail of trailArray) {
        if(trail.price === "$$$$" || trail.price === "$$$$$" || trail.price === "$$$$$$") {
           console.log(`\t${trail.trailName}`)
        }
    }
}

// Get the cheapest river tours printed as a tabbed list
const cheapRiverTour = (riverArray) => {
    for (const tour of riverArray) {
        if(tour.price === "$") {
           console.log(`\t${tour.river}`)
        }
    }
}

// Get the expensive river tours printed as a tabbed list
const expensiveRiverTour = (riverArray) => {
    for (const tour of riverArray) {
        if(tour.price === "$$$$" || tour.price === "$$$$$" || tour.price === "$$$$$$") {
           console.log(`\t${tour.river}`)
        }
    }
}

// Function for "TRAIL DETAILS" that get each necessary item in a loop for the string.
const trailDetails = (trailArray) => {
    for (const trail of trailArray) {
           console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.\nThe highlighted plant for the trip is ${trail.plantHighlight}.\n`)
    }
}

// Function for "RIVER DETAILS" that get each necessary item in a loop for the string.
const riverDetails = (riverArray) => {
    for (const tour of riverArray) {
           console.log(`${tour.river} starts at [${tour.latitude}, ${tour.longitude}] and is ${tour.length} kilometers long.\nThe unique fish for the trip is ${tour.uniqueFish}.\n`)
    }
}

module.exports = {
    totalTrailMiles, shortestTrail, longTrail,
    cheapestTrail, expensiveTrail, cheapRiverTour,
    expensiveRiverTour, trailDetails, riverDetails
}
